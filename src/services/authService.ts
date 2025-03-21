import axios from 'axios'
import { authAxios } from '@/api/axiosConfig'

const authService = {
  login: async (email: string, password: string): Promise<string> => {
    try {
      const response = await authAxios.post(`/login`, {email, password})
      return response.data

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new Error("Incorrect email or password")
        }
      }
      throw new Error(`Unexpected error during login\n${error}`)
    }
  },

  register: async (email: string, password: string): Promise<void> => {
    try {
      await authAxios.post(`/register`, {email, password})
      
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          throw new Error("The email already exists")
        }
      }
      throw new Error(`Unexpected error during register\n${error}`)
    }
  },
}

export default authService
