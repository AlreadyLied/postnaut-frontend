import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import { NoticeDto } from '@/types/notice'
import noticeService from '@/services/noticeService'

const Mailbox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [notices, setNotices] = useState<NoticeDto[]>([])

  const toggleDropdown = () => setIsOpen(!isOpen)

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const fetchedNotices = await noticeService.getNotice()
        setNotices(fetchedNotices)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchNotices()
  }, [])
  
  return (
    <div className="flex flex-col relative w-16 items-center">
      <button onClick={toggleDropdown} className="">
        <Mail className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-8 w-48 bg-white shadow-lg rounded-lg border">
          <ul className="p-2">
            {notices.length === 0 ? (
              <li className="text-gray-500">No alarms</li>
            ) : (
              notices.map((notice) => (
                <li key={notice.notificationId} className="border-b py-1 text-sm">
                  {/*notice.message*/}
                  Reply!
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Mailbox
