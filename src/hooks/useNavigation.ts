import { useNavigate, useLocation } from 'react-router-dom'

const useNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return {
    goToMain: () => navigate('/'),
    goToLogin: () => navigate('/login'),
    goToRegister: () => navigate('/register'),
    goToNewPost: () => navigate('/new-post'),
    goToStats: () => navigate('/stats'),
    goToPosts: () => navigate('/posts'),
    goToArchive: () => navigate('/archive'),
    goToComments: () => navigate('/comments'),
    goToReplies: () => navigate('/replies'),
    currentPath: location.pathname,
  }
}

export default useNavigation
