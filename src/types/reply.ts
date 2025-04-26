export interface ReplyDto {
  replyId: number,
  userId: number,
  postId: number,
  content: string,
  liked: boolean,
  createdAt: string,
}
