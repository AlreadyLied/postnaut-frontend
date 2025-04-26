import { FC, useState } from 'react'
import { Eye, Heart, MessageSquareMore, Power, PowerOff } from 'lucide-react'
import postAxios from '@/services/postService'

interface PostCardProps {
  postId: number
  title: string
  contents: string
  viewCount: number
  likeCount: number
  commentCount: number
  onClick: () => void
}

const PostCard: FC<PostCardProps> = ({ postId, title, contents, viewCount, likeCount, commentCount, onClick }) => {
  const [postActive, setPostActive] = useState(true)

  const handleCardClick = () => {
    onClick?.()
  }

  const handleToggleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    
    try {
      if (postActive) {
        postAxios.hidePost(postId)
      } else if (!postActive) {
        postAxios.unhidePost(postId)
      } else {
        console.error("something went wrong")
      }
    } catch (error: unknown) {
      console.error(error)
    }

    setPostActive(e.target.checked);
  }
  
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md w-full text-left cursor-pointer hover:shadow-lg transition"
      onClick={handleCardClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <div className="flex items-center">
          {postActive ? <Power className="mr-4" size={25}/> : <PowerOff className="mr-4" size={25}/>}
          <label
            className="relative inline-flex items-center cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="checkbox"
              className="sr-only peer"
              checked={postActive}
              onChange={handleToggleChange}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>
      </div>
      <p className="text-gray-600 line-clamp-2">{contents}</p>
      <div className="mt-8 gap-x-8 flex text-sm text-gray-500">
        <span className="flex items-center gap-1"><Eye size={16}/>{viewCount}</span>
        <span className="flex items-center gap-1"><Heart size={16}/>{likeCount}</span>
        <span className="flex items-center gap-1"><MessageSquareMore size={16}/>{commentCount}</span>
      </div>
    </div>
  )
}

export default PostCard
