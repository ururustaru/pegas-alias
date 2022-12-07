export type ForumState = {
  cursor: number,
  limit: number
}

export interface ITopic {
  Comments:Array<Comment>,
  author_id: number,
  author_name:string,
  createdAt: string,
  updatedAt: string,
  question: string,
  title: string,
  topic_id: number,
}

export type Comment = {
  author_id: number,
  author_name: string,
  createdAt: string,
  updatedAt: string,
  message: string,
  topic_id: number
}
