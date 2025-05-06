import { PostDto } from '@/types/post'
import { useEffect, useState } from 'react'
import postAxios from '@/services/postService'

interface CardProps {
  post: PostDto
  onClick: (comment: string) => void
}

const PostIt: React.FC<CardProps> = ({ post, onClick }) => {
  const [comment, setComment] = useState("")
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(false) // Reset liked state when post changes
  }, [post.postId])

  const handleLike = async () => {
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
    <div className="card bg-cardA shadow-md">
      <div className="card-body space-y-4 p-6">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-xl font-bold">{post.title}</h2>
          <button
            className={`btn ${liked ? 'btn-dark' : 'btn-outline'}`}
            onClick={handleLike}
            disabled={liked}
          >
            {liked ? 'Liked' : 'Like'}
          </button>
        </div>

        <p className="text-base text-gray-700">{post.content}</p>

        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Leave a comment"
            className="input input-bordered flex-1"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              onClick(comment)
              setComment("")
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostIt
