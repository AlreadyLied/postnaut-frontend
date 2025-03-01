import Sidebar from '@/components/Sidebar'

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex items-center justify-center pt-40 w-full">
        <p className="text-5xl">
          Profile Page
        </p>
      </div>
    </div>
  )
}

export default Dashboard
