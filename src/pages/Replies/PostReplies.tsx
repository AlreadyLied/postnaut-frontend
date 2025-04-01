import usePostStore from '@/stores/postStore'

const PostReplies = () => {
  const { currentPostId } = usePostStore()

  return (
    <div>
      <p>{currentPostId}</p>
    </div>
  )
}

export default PostReplies
