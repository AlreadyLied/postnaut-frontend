import { createBrowserRouter } from 'react-router-dom';

import App from '@/App'
import MainPage from '@/pages/Main'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
import NewPostPage from '@/pages/NewPost'
import StatsPage from '@/pages/Stats'
import PostsPage from '@/pages/Posts'
import ArchivePage from '@/pages/Archive'
import CommentsPage from '@/pages/Comments'

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
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'new-post',
        element: <NewPostPage />,
      },
      {
        path: 'stats',
        element: <StatsPage />,
      },
      {
        path: 'posts',
        element: <PostsPage />,
      },
      {
        path: 'archive',
        element: <ArchivePage />,
      },
      {
        path: 'comments',
        element: <CommentsPage />,
      },
    ],
  },
])

export default router
