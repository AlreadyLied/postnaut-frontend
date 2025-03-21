import axios from 'axios'
import { postAxios } from '@/api/axiosConfig'
import { PostDto } from '@/types/post'

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
      throw new Error("Unexpected error during sending view history")
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

      if (response.status === 204) {
        return []
      }
      if (response.status !== 200) {
        throw new Error()
      }

      return response.data

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 500) {
          throw new Error("Internal server error")
        }
      }
      throw new Error("Unexpected error during fetching random posts")
    }
  },
}

export default postService
