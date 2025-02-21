import profileIcon from '@/assets/icons/profile.svg'
import UseNavigation from '@/hooks/useNavigation'

const ProfileButton = () => {
  const {goToProfile} = UseNavigation()
  
  return (
    <button className="px-2 py-2 flex flex-col items-center w-24" onClick={goToProfile}>
        <img src={profileIcon} alt="Profile" className="w-6 h-6" />
        My Page
      </button>
  )
}

export default ProfileButton
