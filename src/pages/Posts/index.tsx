import Sidebar from '@/components/Sidebar'

const Posts = () => {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex items-center justify-center pt-40 w-full">
        <p className="text-5xl">
          Posts Page
        </p>
      </div>
    </div>
  )
}

export default Posts
