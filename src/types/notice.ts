import { NOTICE_TYPE } from '@/constants/noticeType';

export interface NoticeDto {
  notificationId: number,
  userId: number,
  type: NOTICE_TYPE
  subjectId: number,
  createdAt: string,
}
