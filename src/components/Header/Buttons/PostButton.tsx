import postIcon from '@/assets/icons/post.svg'
import useNavigation from '@/hooks/useNavigation'

const PostButton = () => {
  const { goToNewPost } = useNavigation()
  
  return (
    <button className="px-2 py-2 flex flex-col items-center w-16" onClick={goToNewPost}>
      <img src={postIcon} alt="Post" className="w-8 h-8" />
    </button>
  )
}

export default PostButton
