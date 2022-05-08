import { Question } from "./shared/types.ts";

import { getQuestionList } from "./request.ts";

async function getQuestionTotalCount() {
  const result = await getQuestionList();
  return result ? result.totalCount : 0;
}

export async function getAllQuestionList(): Promise<Question[]> {
  const totalCount = await getQuestionTotalCount();
  if (totalCount > 0) {
    const { list: allQuestions } = await getQuestionList({
      pageSize: totalCount,
    });
    return allQuestions;
  }
  return [];
}
