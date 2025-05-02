import { useEffect, useState } from 'react'

import usePostStore from '@/stores/postStore'
import postAxios from '@/services/postService'
import { ReplyDto } from '@/types/reply'

const PostReplies = () => {
  const { currentPostId } = usePostStore()
  const [replies, setReplies] = useState<ReplyDto[]>([])

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const fetchedReplies = await postAxios.postReplies(currentPostId)
        setReplies(fetchedReplies)
      } catch (error: unknown) {
        console.error('failed to fetch replies', error)
      }
    }

    if (currentPostId) {
      fetchReplies()
    }
  }, [currentPostId])

  return (
    <div>
      <h2>Comments</h2>
      {replies?.map((reply) => (
        <div key={reply.replyId} className="p-4 bg-white rounded-lg shadow-md w-full">
          <p className="text-gray-600 text-left line-clamp-2">{reply.content}</p>
          <div className="mt-8 gap-x-8 flex text-sm text-gray-500">
            <span>{reply.liked ? "Liked" : "Not Liked"}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostReplies
