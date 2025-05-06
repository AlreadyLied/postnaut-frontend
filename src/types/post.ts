export interface PostDto {
  postId: number
  userId: number
  title: string | null
  content: string
  viewCount: number
  likeCount: number
  createdAt: string
  expiresAt: string
  isHidden: boolean
  isExpired: boolean
}
