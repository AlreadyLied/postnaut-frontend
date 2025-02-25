import { useNavigate } from 'react-router-dom'

const useNavigation = () => {
  const navigate = useNavigate()

  return {
    goToMain: () => navigate('/'),
    goToProfile: () => navigate('/profile'),
    goToLogin: () => navigate('/login'),
    goToRegister: () => navigate('/register'),
    goToPost: () => navigate('/post'),
  }
}

export default useNavigation
