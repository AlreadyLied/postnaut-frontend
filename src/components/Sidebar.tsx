import useNavigation from '@/hooks/useNavigation'
import useUserStore from '@/stores/userStore'
import useAlert from '@/hooks/useAlert'

import SidebarButton from '@/components/SidebarButton'

const SideBar = () => {
  const { goToStats, goToPosts, goToArchive, goToComments, currentPath } = useNavigation()
  const { logout } = useUserStore()
  const { showLogout } = useAlert()

  const handleLogout = () => {
    logout()
    showLogout()
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
