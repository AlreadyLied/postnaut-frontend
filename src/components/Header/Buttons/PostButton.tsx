import useNavigation from '@/hooks/useNavigation'
import { SquarePlus } from 'lucide-react'

const PostButton = () => {
  const { goToNewPost } = useNavigation()
  
  return (
    <button className="flex flex-col items-center w-16" onClick={goToNewPost}>
      <SquarePlus className="w-8 h-8"/>
    </button>
  )
}

export default PostButton
