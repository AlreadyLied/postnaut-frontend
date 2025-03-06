import axios from 'axios'

const API_BASE_URL = "http://localhost:8080"

const getToken = () => {
  return localStorage.getItem("token")
}

const createAxiosInstance = (basePath: string = "") => {
  return axios.create({
    baseURL: `${API_BASE_URL}${basePath}`,
    withCredentials: true,
  })
}

const axiosInstance = createAxiosInstance()

axiosInstance.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authAxios = createAxiosInstance("/auth")
export const postAxios = createAxiosInstance("/posts")

export default axiosInstance
