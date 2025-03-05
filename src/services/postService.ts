import axios from 'axios'
import Post from '@/types/post'

const API_URL = "http://localhost:8080/posts"

// DELETE
const testPosts: Post[] = [
  {
    title: null,
    content: "Hello",
    likes: 1,
  },
  {
    title: null,
    content: "Hello2",
    likes: 2,
  },
]

const postService = {
  newPost: async (title: string, content: string): Promise<void> => {
    try {
      const response = await axios.post(`${API_URL}/add`, {title, content})

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

  getRandomPosts: async (): Promise<Post[]> => {
    try {
      // TODO: api
      const response = await axios.get(`${API_URL}/fill-in`)

      if (response.status !== 200) {
        throw new Error()
      }

      return response.data as Post[]

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          throw new Error("fill-in")
        }
      }
      throw new Error("Unexpected error during fetching random posts")
    }
  },

  // DELETE
  testGetRandomPosts: async (): Promise<Post[]> => {
    return testPosts
  }
}

export default postService
