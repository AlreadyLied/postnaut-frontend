import useNavigation from '@/hooks/useNavigation'

const SideBar = () => {
  const { goToStats, goToPosts, goToArchive, goToComments } = useNavigation()

  const handleLogout = () => {
    /* TODO: logout logic */
    alert("logout")
  }

  return (
    <div className="w-48 h-full p-5 flex flex-col">
      <div className="flex flex-col gap-4 pt-10">
        <button className="hover:bg-gray-200 p-2 rounded" onClick={goToStats}>
          Stats
        </button>
        <button className="hover:bg-gray-200 p-2 rounded" onClick={goToPosts}>
          Posts
        </button>
        <button className="hover:bg-gray-200 p-2 rounded" onClick={goToArchive}>
          Archive
        </button>
        <button className="hover:bg-gray-200 p-2 rounded" onClick={goToComments}>
          Comments
        </button>
        <button className="hover:bg-gray-200 p-1 mt-36 rounded" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default SideBar
