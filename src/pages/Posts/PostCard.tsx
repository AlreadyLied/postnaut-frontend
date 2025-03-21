import { FC } from 'react'

interface PostCardProps {
  title: string
  contents: string
  viewCount: number
  likeCount: number
  commentCount: number
}

const PostCard: FC<PostCardProps> = ({ title, contents, viewCount, likeCount, commentCount }) => {
  return (
    <button className="p-4 bg-white rounded-lg shadow-md hover:shadlow-lg transition">
      <h2 className="text-lg font-semibold truncate">{title}</h2>
      <p className="text-gray-600 line-clamp-2">{contents}</p>
      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span>{viewCount}</span>
        <span>{likeCount}</span>
        <span>{commentCount}</span>
      </div>
    </button>
  )
}

export default PostCard
