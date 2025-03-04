import useNavigation from '@/hooks/useNavigation'
import { KeyRound } from 'lucide-react'

const LoginButton = () => {
  const { goToLogin } = useNavigation()
  
  return (
    <button className="px-2 py-2 flex flex-col items-center w-16" onClick={goToLogin}>
      <KeyRound className="w-8 h-8" />
    </button>
  )
}

export default LoginButton
