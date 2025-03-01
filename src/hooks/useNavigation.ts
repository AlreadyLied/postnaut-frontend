import { useNavigate } from 'react-router-dom'

const useNavigation = () => {
  const navigate = useNavigate()

  return {
    goToMain: () => navigate('/'),
    goToLogin: () => navigate('/login'),
    goToRegister: () => navigate('/register'),
    goToNewPost: () => navigate('/new-post'),
    goToStats: () => navigate('/stats'),
    goToPosts: () => navigate('/posts'),
    goToArchive: () => navigate('/archive'),
    goToComments: () => navigate('comments'),
  }
}

export default useNavigation
