import useNavigation from "@/hooks/useNavigation"
import loginIcon from '@/assets/icons/login.svg'
import profileIcon from '@/assets/icons/profile.svg'

const Header: React.FC = () => {
  const { goToProfile, goToMain } = useNavigation()

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center">
      {/* Website Logo */}
      <button onClick={goToMain}>
        <img src="/logo.png" alt="Website Icon" className="w-auto h-20 mr-2" />
      </button>

      {/* Navigation Buttons */}
      <div className="flex space-x-2">
        <button className="px-2 py-2 flex flex-col items-center w-24">
          <img src={loginIcon} alt="Login" className="w-6 h-6" />
          Login
        </button>
        <button className="px-2 py-2 flex flex-col items-center w-24" onClick={goToProfile}>
          <img src={profileIcon} alt="Profile" className="w-6 h-6" />
          My Page
        </button>
      </div>
    </header>
  )
}

export default Header
