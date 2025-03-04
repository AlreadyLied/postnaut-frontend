import useUserStore from '@/stores/userStore'

import LogoButton from '@/components/Header/Buttons/LogoButton'
import LoginButton from '@/components/Header/Buttons/LoginButton'
import ProfileButton from '@/components/Header/Buttons/ProfileButton'
import Mailbox from '@/components/Header/Buttons/Mailbox'
import PostButton from '@/components/Header/Buttons/PostButton'

const Header: React.FC = () => {
  const { isLoggedIn } = useUserStore()

  return (
    <header className="w-full h-32 py-4 px-6 flex justify-between items-center">
      <LogoButton />

      <div className="flex gap-x-1">
        {isLoggedIn ? <Mailbox /> : <div/>}
        {isLoggedIn ? <PostButton /> : <div/>}
        {isLoggedIn ? <ProfileButton /> : <LoginButton />}
      </div>
    </header>
  )
}

export default Header
