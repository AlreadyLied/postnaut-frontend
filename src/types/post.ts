export interface Post {
  title: string | null
  content: string
  likes: number
}

export interface PostWithId extends Post {
  id: number
}
