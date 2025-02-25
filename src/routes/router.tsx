import { createBrowserRouter } from 'react-router-dom';
import App from '@/App'
import MainPage from '@/pages/MainPage'
import ProfilePage from '@/pages/ProfilePage';
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import PostPage from '@/pages/PostPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/post',
        element: <PostPage />,
      },
    ],
  },
])

export default router
