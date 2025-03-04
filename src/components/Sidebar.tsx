import useNavigation from '@/hooks/useNavigation'
import SidebarButton from '@/components/SidebarButton'
import useUserStore from '@/stores/userStore'

const SideBar = () => {
  const { goToMain, goToStats, goToPosts, goToArchive, goToComments, currentPath } = useNavigation()
  const { logout } = useUserStore()

  const handleLogout = () => {
    logout()
    goToMain()
  }

  return (
    <div className="w-48 h-full p-5 flex flex-col">
      <div className="flex flex-col gap-4 pt-10">
        <SidebarButton label="Stats" onClick={goToStats} path="/stats" currentPath={currentPath} />
        <SidebarButton label="Posts" onClick={goToPosts} path="/posts" currentPath={currentPath} />
        <SidebarButton label="Archive" onClick={goToArchive} path="/archive" currentPath={currentPath} />
        <SidebarButton label="Comments" onClick={goToComments} path="/comments" currentPath={currentPath} />
        
        <button className="hover:bg-gray-200 p-1 mt-36 rounded" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default SideBar
