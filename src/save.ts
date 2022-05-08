import { Question, QuestionMap } from "./shared/types.ts";

import { parseQuestion2Html } from "./parse-html.ts";

export function saveQuestionList(questions: Question[]) {
  const questionListHtml = questions.map((question) => {
    return `| [${question.title}](./answers/${question.exerciseKey}.md) | ${question.category} | ${question.level} | ${question.updateAt} |`;
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

export function loadManifest(): QuestionMap {
  let manifest;
  try {
    manifest = JSON.parse(Deno.readTextFileSync("./manifest"));
  } catch (error) {
    console.log(error);
    manifest = {};
  }
  return manifest;
}

export function saveManifest(questions: Question[]) {
  const questionMap: QuestionMap = {};
  questions.reduce((map, question) => {
    map[question.exerciseKey] = question;
    return map;
  }, questionMap);
  Deno.writeTextFileSync("./manifest", JSON.stringify(questionMap));
}
