import axios from 'axios'

const API_URL = "http://localhost:8080/auth"

const authService = {
  login: async (email: string, password: string): Promise<string> => {
    try {
      const response = await axios.post(`${API_URL}/login`, {email, password})

      if (response.status !== 200) {
        throw new Error("Login failed")
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
      const response = await axios.post(`${API_URL}/register`, {email, password})

      if (response.status !== 201) {
        throw new Error("Registration failed")
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          throw new Error("Email already exists")
        }
      }
      throw new Error("Unexpected error during register")
    }
  },
}

export default authService
