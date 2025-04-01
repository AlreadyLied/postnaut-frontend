import axios from 'axios'
import { postAxios } from '@/api/axiosConfig'
import { PostDto } from '@/types/post'
import { ReplyDto } from '@/types/reply'

const postService = {
  addReply: async (postId: number, content: string): Promise<void> => {
    try {
      await postAxios.post(`/${postId}/replies`, {content})

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // custom bad requests
      }
      throw new Error("Unexpected error during adding reply")
    }
  },

  myReplies: async (postId: number): Promise<ReplyDto[]> => {
    try {
      const response = await postAxios.get(`/${postId}/replies`)
      return response.data

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // custom bad requests
      }
      throw new Error("Unexpected error during loading replies")
    }
  },

  myPosts: async (): Promise<PostDto[]> => {
    try {
      const response = await postAxios.get('/my')
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
      await postAxios.post(`/view-history/${postId}`)

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // custom bad requests
      }
      throw new Error("Unexpected error during sending view history")
    }
  },

  newPost: async (title: string, content: string, activeDuration: string): Promise<void> => {
    try {
      await postAxios.post('/add', {title, content, activeDuration})

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
