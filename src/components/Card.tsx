import { motion } from 'framer-motion'
import { PostDto } from '@/types/post'
import { useState } from 'react'
import postAxios from '@/services/postService'

interface CardProps {
  post: PostDto
  animationKey: number
  direction: number
  onClick: (comment: string) => void
}

const Card: React.FC<CardProps> = ({ post, animationKey, direction, onClick }) => {
  const [comment, setComment] = useState("")
  const [liked, setLiked] = useState(false)

  const handleLike = async() => {
    if (!liked) {
      try {
        setLiked(true)

        await postAxios.likePost(post.postId)
      } catch (error) {
        console.error("error liking the post", error)
      }
    }
  }
  
  return (
    <motion.div
      key={animationKey}
      initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="card bg-cardA w-[500px] shadow-xl rounded-lg"
    >
      <div className="card-body space-y-16 p-6">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{post.title}</h2>
          <button
            className={`btn ${liked ? 'btn-dark' : 'btn-outline'}`}
            onClick={handleLike}
            disabled={liked}
          >
            {liked ? 'Liked' : 'Like'}
          </button>
          <p className="text-lg">{post.content}</p>
          <div className="card-actions justify-end space-x-2">
            <input
              type="text"
              placeholder=" Leave a comment "
              className="input input-bordered w-2/3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="btn btn-primary" onClick={() => onClick(comment)}>Submit</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
