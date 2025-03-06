export interface PostDto {
  postId: number
  userId: number
  createdAt: string
  title: string | null
  content: string
  likeCount: number
  viewCount: number
}

export interface PostCard {
  title: string | null
  content: string
  likeCount: number
}

export interface PostCardWithId extends PostCard {
  id: number
}
