import axios from 'axios'

const API_URL = "http://localhost:8080/post?"

const postService = {
  newPost: async (title: string, content: string): Promise<void> => {
    try {
      const response = await axios.post(`${API_URL}/new-post`, {title, content})

      if (response.status !== 201) {
        throw new Error("Post failed")
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new Error("New post failed?")
        }
      }
      throw new Error("Unexpected error during new post")
    }
  }
}

export default postService
