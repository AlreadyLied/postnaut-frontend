import profileIcon from '@/assets/icons/profile.svg'
import UseNavigation from '@/hooks/useNavigation'

const ProfileButton = () => {
  const { goToStats } = UseNavigation()
  
  return (
    <button className="px-2 py-2 flex flex-col items-center w-16" onClick={goToStats}>
        <img src={profileIcon} alt="Profile" className="w-8 h-8" />
      </button>
  )
}

export default ProfileButton
