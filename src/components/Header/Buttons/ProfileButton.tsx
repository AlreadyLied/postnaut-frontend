import UseNavigation from '@/hooks/useNavigation'
import { CircleUserRound } from 'lucide-react'

const ProfileButton = () => {
  const { goToStats } = UseNavigation()
  
  return (
    <button className="flex flex-col items-center w-16" onClick={goToStats}>
      <CircleUserRound className="w-8 h-8" />
    </button>
  )
}

export default ProfileButton
