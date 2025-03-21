import { motion } from 'framer-motion'
import { PostDto } from '@/types/post'

interface CardProps {
  post: PostDto
  animationKey: number
  direction: number
}

const Card: React.FC<CardProps> = ({ post, animationKey, direction }) => {
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
        <h2 className="card-title">{post.title}</h2>
        <p className="text-lg">{post.content}</p>
        <div className="card-actions justify-end space-x-2">
          <input
            type="text"
            placeholder=" Leave a comment "
            className="input input-bordered w-2/3"
          />
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
