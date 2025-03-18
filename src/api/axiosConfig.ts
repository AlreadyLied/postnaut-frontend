import axios from 'axios'
import useUserStore from '@/stores/userStore'

const API_BASE_URL = "http://localhost:8080"

const getToken = () => {
  return useUserStore.getState().user?.token ?? null
}

const createAxiosInstance = (basePath: string = "") => {
  const instance = axios.create({
    baseURL: `${API_BASE_URL}${basePath}`,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  })

  instance.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  return instance
}

export const authAxios = createAxiosInstance("/auth")
export const postAxios = createAxiosInstance("/posts")

export default createAxiosInstance()
