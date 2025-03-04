import LoginForm from '@/pages/Login/LoginForm'
import useNavigation from '@/hooks/useNavigation'

const Login = () => {
  const { goToRegister } = useNavigation()

  return (
    <div className="flex flex-col items-center justify-center">
      <LoginForm />
      <div className="mt-6 text-center">
        <p>Don't have an account?</p>
        <p onClick={goToRegister} className="text-blue-500 underline cursor-pointer">
          Register now!
        </p>
      </div>
    </div>
  )
}

export default Login
