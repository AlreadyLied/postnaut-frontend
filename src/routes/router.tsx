import { createBrowserRouter } from 'react-router-dom';
import App from '@/App'
import MainPage from '@/pages/MainPage'
import ProfilePage from '@/pages/ProfilePage';

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
        element: <ProfilePage />
      },
    ],
  },
])

export default router
