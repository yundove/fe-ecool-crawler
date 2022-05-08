export interface getQuestionListParams {
  pageNum?: number;
  pageSize?: number;
  orderBy?: "updateTime";
  order?: "asc" | "desc";
}

export interface Question {
  exerciseKey: string;
  category: string;
  title: string;
  level: number;
  updateAt: string;
}

export interface QuestionMap {
  [exerciseKey: string]: Question;
}
