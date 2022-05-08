import type { Cheerio, Root } from "https://deno.land/x/cheerio@1.0.4/mod.ts";
import { Question } from "./shared/types.ts";

import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";
import decode from "https://esm.sh/decode-html@2.0.0";


export function parseQuestion2Html(html: string, questionMetadata: Question) {
  const question = questionMetadata;

  try {
    const $ = cheerio.load(html);

    const content = $(".content-container");

    // 标题
    manageTitle(content);

    // 难度星级
    manageDifficultStar(content, question, $);

    // 插图
    managePicture(content);

    // 代码片段
    manageCode(content, $);

    // 推广二维码
    manageQRCode(content);

    // 题目切换按钮
    manageFooter(content);

    return decode(content.html());
  } catch (error) {
    console.log(error);
  }
}

function manageTitle(content: Cheerio) {
  const title = content.find("h2[class^=title___]").eq(0);
  title.text(title.text());
}

function manageDifficultStar(
  content: Cheerio,
  questionMetadata: Question,
  $: Root,
) {
  const question = questionMetadata;
  const difficultStar = content.find("[class^=secondBox___] .ant-rate").eq(0);
  const difficultLevel = $("<span />");
  difficultLevel.text(`${question.level}/5`);
  difficultLevel.insertAfter(difficultStar);
  difficultStar.remove();
}

function managePicture(content: Cheerio) {
  content.find(".ant-image-mask").remove();
}

function manageCode(content: Cheerio, $: Root) {
  const codeBoxes = content.find("pre > [class^=codeBox___]");

  for (let i = 0; i < codeBoxes.length; i++) {
    const box = codeBoxes.eq(i);
    const code = box.find("code");
    const codeLanguage = (code.attr("class")?.match(/language-(\S*)/) || [])[1];

    // 移除行号
    code.find("span.linenumber").remove();

    const newCode = $("<div />");
    newCode.text(getCodeText(codeLanguage, code.text()));

    // 插入新的代码片段，移除原有代码片段
    // 原有代码片段固定组合为 pre > [class^=codeBox___]
    const pre = box.parent();
    newCode.insertAfter(pre);
    pre.remove();
  }
}

function manageQRCode(content: Cheerio) {
  content.find("[class^=qrBox___]").remove();
}

function manageFooter(content: Cheerio) {
  content.find("[class^=footerBox___]").remove();
}

/**
 * 获取代码文本
 * @param codeLanguage 代码语言
 * @param rawText 代码内容
 * @returns markdown格式的代码文本
 */
function getCodeText(codeLanguage: string, rawText: string) {
  return String.raw`
    
${"```" + codeLanguage}
${rawText}
${"```"}

`;
}
