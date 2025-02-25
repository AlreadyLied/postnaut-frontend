import useUserStore from '@/stores/userStore'

import LogoButton from '@/components/Header/Buttons/LogoButton'
import LoginButton from '@/components/Header/Buttons/LoginButton'
import ProfileButton from '@/components/Header/Buttons/ProfileButton'
import AlarmButton from '@/components/Header/Buttons/AlarmButton'
import PostButton from '@/components/Header/Buttons/PostButton'

const Header: React.FC = () => {
  const {isLoggedIn} = useUserStore()

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center">
      <LogoButton />

      <div className="flex gap-x-1">
        {isLoggedIn ? <AlarmButton /> : <div/>}
        {isLoggedIn ? <PostButton /> : <div/>}
        {isLoggedIn ? <ProfileButton /> : <LoginButton />}
      </div>
    </header>
  )
}

export default Header
