import axios from 'axios'
import { postAxios } from '@/api/axiosConfig'
import { PostDto } from '@/types/post'

// DELETE
const testPosts: PostDto[] = [
  {
    postId: 123,
    userId: 142,
    createdAt: "123",
    title: null,
    content: "Hello",
    likeCount: 1,
    viewCount: 3,
  },
  {
    postId: 143,
    userId: 14512,
    createdAt: "1123",
    title: null,
    content: "Hell11o",
    likeCount: 1,
    viewCount: 3,
  },
]

const postService = {
  myPosts: async (): Promise<PostDto[]> => {
    try {
      const response = await postAxios.get('/my')

      if (response.status !== 200) {
        throw new Error()
      }

      return response.data

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // custom bad requests
      }
      throw new Error("Unexpected error during loading my posts")
    }
  },

  readPost: async (postId: number): Promise<void> => {
    try {
      const response = await postAxios.post(`/view-history/${postId}`)

      if (response.status !== 201) {
        throw new Error()
      }

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // custom bad requests
      }
      throw new Error("Unexpected error during adding view history")
    }
  },

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

  getRandomPosts: async (): Promise<PostDto[]> => {
    try {
      const response = await postAxios.get('/random')

      if (response.status !== 200) {
        throw new Error()
      }

      return response.data

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
  testGetRandomPosts: async (): Promise<PostDto[]> => {
    return testPosts
  }
}

export default postService
