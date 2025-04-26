import usePostStore from '@/stores/postStore'
import { useEffect, useState } from 'react'
import postAxios from '@/services/postService'
import ReplyCard from '@/pages/Replies/ReplyCard'
import { ReplyDto } from '@/types/reply'

const PostReplies = () => {
  const { currentPostId } = usePostStore()
  const [replies, setReplies] = useState<ReplyDto[]>()

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
      <div className="space-y-4">
        {replies?.map((reply) => (
          <ReplyCard
            key={reply.replyId}
            contents={reply.content}
            liked={reply.liked}
          />
        ))}
      </div>
    </div>
  )
}

export default PostReplies
