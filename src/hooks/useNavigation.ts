import { useNavigate } from 'react-router-dom'

const useNavigation = () => {
  const navigate = useNavigate()

  return {
    goToMain: () => navigate('/'),
    goToProfile: () => navigate('/dashboard'),
    goToLogin: () => navigate('/login'),
    goToRegister: () => navigate('/register'),
    goToPost: () => navigate('/post'),
  }
}

export default useNavigation
