import loginIcon from '@/assets/icons/login.svg'
import useNavigation from '@/hooks/useNavigation'

const LoginButton = () => {
  const { goToLogin } = useNavigation()
  
  return (
    <button className="px-2 py-2 flex flex-col items-center w-24" onClick={goToLogin}>
      <img src={loginIcon} alt="Login" className="w-6 h-6" />
      Login
    </button>
  )
}

export default LoginButton
