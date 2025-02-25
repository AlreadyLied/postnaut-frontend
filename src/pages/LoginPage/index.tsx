import LoginForm from '@/pages/LoginPage/LoginForm'
import useNavigation from '@/hooks/useNavigation'

const Login = () => {
  const {goToRegister} = useNavigation()

  return (
    <div className="flex flex-col items-center justify-center">
      <LoginForm />
      <button onClick={goToRegister}>
        Register now!
      </button>
    </div>
  )
}

export default Login
