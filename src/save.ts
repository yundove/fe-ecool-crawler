import { Question, QuestionMap } from "./shared/types.ts";

import { parseQuestion2Html } from "./parse-html.ts";

export function saveQuestionList(questions: Question[]) {
  const questionListHtml = questions.map((question) => {
    return `| [${question.title.trim()}](./answers/${question.exerciseKey}.md) | ${question.category} | ${question.level} | ${question.updateAt} |`;
  });

  const html = `
| 题目 | 类型 | 难度 | 更新时间 |
| ----------- | ----------- | ----------- | ----------- |
  ${questionListHtml.join("\n")}
`;

  Deno.writeTextFileSync(`./docs/README.md`, html);
}

export function saveAnswer(answer: string, question: Question) {
  const html = parseQuestion2Html(answer, question);
  Deno.writeTextFileSync(`./docs/answers/${question.exerciseKey}.md`, html);
}

export function clearLastCache() {
  Deno.writeTextFileSync("./.cache", "");
}

export function appendToLastCache(question: Question) {
  const info = `"${question.exerciseKey}": ${JSON.stringify(question)}\n`;
  Deno.writeTextFileSync("./.cache", info, {
    append: true,
  });
}

export function loadLastCache(): QuestionMap {
  let cache;
  try {
    const lastCacheFile = readLastCacheFile();
    const existedfiles = getExistFilenames();

    Object.keys(lastCacheFile).forEach((id) => {
      if (!existedfiles.includes(id)) {
        delete lastCacheFile[id];
      }
    });

    cache = lastCacheFile;
  } catch (error) {
    console.log(error);
    cache = {};
  }

  return cache;
}

function readLastCacheFile() {
  let lastCacheFile;
  try {
    lastCacheFile = JSON.parse(
      `{${Deno.readTextFileSync("./.cache").trim().split("\n").join(",")}}`,
    );
  } catch (error) {
    console.log(error);
    lastCacheFile = {};
  }
  return lastCacheFile;
}

function getExistFilenames() {
  let filenames: string[];
  try {
    const dir = Deno.readDirSync("./docs/answers");
    filenames = Array.from(dir)
      .filter((dir) => dir.isFile && /\.md$/.test(dir.name)).map((dir) =>
        dir.name.substring(0, dir.name.length - ".md".length)
      );
  } catch (error) {
    console.log(error);
    filenames = [];
  }
  return filenames;
}
