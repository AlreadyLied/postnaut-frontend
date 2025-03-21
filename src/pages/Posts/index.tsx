import Sidebar from '@/components/Sidebar'
import MyPosts from '@/pages/Posts/MyPosts'

const Posts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MyPosts />
    </div>
  )
}

export default Posts
