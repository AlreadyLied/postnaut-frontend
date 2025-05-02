import { FC } from 'react'

interface ReplyCardProps {
  content: string
  liked: boolean
}

const ReplyCard: FC<ReplyCardProps> = ({ content, liked }) => {
  return (
    <button className="p-4 bg-white rounded-lg shadow-md w-full">
      <p className="text-gray-600 text-left line-clamp-2">{content}</p>
      <div className="mt-8 gap-x-8 flex text-sm text-gray-500">
        <span>{liked ? "Liked" : "Not Liked"}</span>
      </div>
    </button>
  )
}

export default ReplyCard
