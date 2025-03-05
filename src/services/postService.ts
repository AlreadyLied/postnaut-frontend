import axios from 'axios'

const API_URL = "http://localhost:8080/posts"

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
  }
}

export default postService
