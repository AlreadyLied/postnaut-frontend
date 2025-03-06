import axios from 'axios'
import { postAxios } from '@/api/axiosConfig'
import { PostDto, PostCard } from '@/types/post'

// DELETE
const testPosts: PostCard[] = [
  {
    title: null,
    content: "Hello",
    likeCount: 1,
  },
  {
    title: "What",
    content: "Hello2",
    likeCount: 3,
  },
]

const postService = {
  newPost: async (title: string, content: string): Promise<void> => {
    try {
      const response = await postAxios.post('/add', {title, content})

      if (response.status !== 201) {
        throw new Error()
      }

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 403) {
          throw new Error("Unauthorized request")
        }
      }
      throw new Error("Unexpected error during adding a post")
    }
  },

  getRandomPosts: async (): Promise<PostCard[]> => {
    try {
      const response = await postAxios.get('/random')

      if (response.status !== 200) {
        throw new Error()
      }

      return response.data.map((post: PostDto) => ({
        title: post.title,
        content: post.content,
        likeCount: post.likeCount,
      }))

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 500) {
          throw new Error("Internal server error")
        } else if (error.response?.status === 204) {
          throw new Error("No content left")
        }
      }
      throw new Error("Unexpected error during fetching random posts")
    }
  },

  // DELETE
  testGetRandomPosts: async (): Promise<PostCard[]> => {
    return testPosts
  }
}

export default postService
