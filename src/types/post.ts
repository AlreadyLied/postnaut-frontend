export interface PostDto {
  postId: number
  userId: number
  createdAt: string
  title: string | null
  content: string
  likeCount: number
  viewCount: number
}

export interface PostWithId extends PostDto {
  id: number
}
