import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { MenuPath } from '@/constants/menuItems'

interface MenuState {
  activePath: MenuPath,
  setActivePath: (path: MenuPath) => void
}

const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      activePath: 'posts',
      setActivePath: (path: MenuPath) => set({ activePath: path }),
    }),
    {
      name: 'menu',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useMenuStore
