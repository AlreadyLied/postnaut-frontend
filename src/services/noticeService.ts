import { noticeAxios } from '@/api/axiosConfig'
import { NoticeDto } from '@/types/notice'
import { isAxiosError } from 'axios'

const noticeService = {
  getNotice: async (): Promise<NoticeDto[]> => {
    try {
      const data = await noticeAxios.get("")
      return data.data
    } catch (error) {
      if (isAxiosError(error)) {
        // custom bad request
      }
      throw new Error("Unexpected error during fetching notices")
    }
  }
}

export default noticeService
