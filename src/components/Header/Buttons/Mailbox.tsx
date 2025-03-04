import { useState } from 'react'
import { Mail } from 'lucide-react'

const alarms = [
  { id: 1, message: "You have a new follower" },
  { id: 2, message: "Someone commented on your post" },
  { id: 3, message: "Hello 1" },
  { id: 4, message: "Hello 1" },
  { id: 5, message: "Hello 1" },
  { id: 6, message: "Hello 1" },
]

const Mailbox = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)
  
  return (
    <div className="flex flex-col relative w-16 items-center">
      <button onClick={toggleDropdown} className="">
        <Mail className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-8 w-48 bg-white shadow-lg rounded-lg border">
          <ul className="p-2">
            {alarms.length === 0 ? (
              <li className="text-gray-500">No alarms</li>
            ) : (
              alarms.map((alarm) => (
                <li key={alarm.id} className="border-b py-1 text-sm">
                  {alarm.message}
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
