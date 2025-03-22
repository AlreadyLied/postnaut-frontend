import { FC } from 'react'
import { Eye, Heart, MessageSquareMore } from 'lucide-react'

interface PostCardProps {
  title: string
  contents: string
  viewCount: number
  likeCount: number
  commentCount: number
}

const PostCard: FC<PostCardProps> = ({ title, contents, viewCount, likeCount, commentCount }) => {
  return (
    <button className="p-4 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold truncate mb-2">{title}</h2>
      <p className="text-gray-600 text-left line-clamp-2">{contents}</p>
      <div className="mt-8 gap-x-8 flex text-sm text-gray-500">
        <span><Eye/>{viewCount}</span>
        <span><Heart/>{likeCount}</span>
        <span><MessageSquareMore/>{commentCount}</span>
      </div>
    </button>
  )
}

export default PostCard
