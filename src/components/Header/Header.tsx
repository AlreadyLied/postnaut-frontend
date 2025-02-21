import LogoButton from '@/components/Header/Buttons/LogoButton'
import LoginButton from '@/components/Header/Buttons/LoginButton'
import ProfileButton from '@/components/Header/Buttons/ProfileButton'
import useUserStore from '@/stores/userStore'

const Header: React.FC = () => {
  const {isLoggedIn} = useUserStore()

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center">
      <LogoButton />

      <div className="flex space-x-2">
        {isLoggedIn ? <ProfileButton /> : <LoginButton />}
      </div>
    </header>
  )
}

export default Header
