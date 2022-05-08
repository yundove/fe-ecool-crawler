import { Question } from "./src/shared/types.ts";
import pLimit from "https://esm.sh/p-limit@4.0.0";

import { getAllQuestionList } from "./src/crawler.ts";
import { getAnswer } from "./src/request.ts";
import {
  appendToLastCache,
  clearLastCache,
  loadLastCache,
  saveAnswer,
  saveQuestionList,
} from "./src/save.ts";
import { waitRandomMs } from "./src/shared/wait.ts";

const limit = pLimit(4);

const newQuestions = await getAllQuestionList();
const questions = getChangedQuestionList(newQuestions);
saveQuestionList(questions);

let all = questions.length, cursor = 0;
console.log(all);

const tasks = questions.map((question) => limit(() => task(question)));
await Promise.all(tasks);

async function task(question: Question) {
  await waitRandomMs(1000, 5000);
  const answer = await getAnswer(question.exerciseKey);
  saveAnswer(answer, question);
  appendToLastCache(question);
  console.log(++cursor, new Date());
}

function getChangedQuestionList(questions: Question[]) {
  const oldQuestionMap = loadLastCache();
  const newQuestions = questions;

  const changedQuestions: Question[] = [];

  newQuestions.forEach((newQuestion) => {
    const exerciseKey = newQuestion.exerciseKey;
    const oldQuestion = oldQuestionMap[exerciseKey];
    if (oldQuestion) {
      if (oldQuestion.updateAt !== newQuestion.updateAt) {
        changedQuestions.push(newQuestion);
      }
    } else {
      changedQuestions.push(newQuestion);
    }
  });

  clearLastCache();
  return changedQuestions;
}
