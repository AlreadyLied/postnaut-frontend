import axios from 'axios'
import { authAxios } from '@/api/axiosConfig'

const authService = {
  login: async (email: string, password: string): Promise<string> => {
    try {
      const response = await authAxios.post(`/auth/login`, {email, password})

      if (response.status !== 200) {
        throw new Error()
      }
      return response.data
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new Error("Incorrect email or password")
        }
      }
      throw new Error("Unexpected error during login")
    }
  },

  register: async (email: string, password: string): Promise<void> => {
    try {
      const response = await authAxios.post(`/auth/register`, {email, password})

      if (response.status !== 201) {
        throw new Error()
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          throw new Error("The email already exists")
        }
      }
      throw new Error("Unexpected error during register")
    }
  },
}

export default authService
