import { getQuestionListParams } from "./shared/types.ts";
import { REQUEST_ORIGIN, REQUEST_PUBLIC_HEADERS } from "./shared/constants.ts";

export async function getQuestionList(params: getQuestionListParams = {}) {
  const pageNum = params.pageNum ?? 1;
  const pageSize = params.pageSize ?? 1;
  const orderBy = params.orderBy ?? "updateTime";
  const order = params.order ?? "desc";

  const { code, data } = await fetch(
    `${REQUEST_ORIGIN}/api/exercise/list?vid=9&tagId=&pageNum=${pageNum}&pageSize=${pageSize}&orderBy=${orderBy}&order=${order}`,
    {
      "credentials": "include",
      "headers": REQUEST_PUBLIC_HEADERS,
      "method": "GET",
      "mode": "cors",
    },
  ).then((response) => response.json());

  if (code === 0) {
    return data;
  }
  return false;
}

export async function getAnswer(exerciseKey: string) {
  const html = await fetch(`${REQUEST_ORIGIN}/topic-answer/${exerciseKey}`, {
    "credentials": "include",
    "headers": REQUEST_PUBLIC_HEADERS,
    "method": "GET",
    "mode": "cors",
  }).then((response) => response.text());

  return html;
}
