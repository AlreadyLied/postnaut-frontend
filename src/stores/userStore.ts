import { User } from '@/types/user'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface UserState {
  user: User | null
  isLoggedIn: boolean
  setUser: (user: User) => void
  login: (user: User, accessToken: string) => void
  logout: () => void
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      setUser: (user: User) => set(() => ({ user })),

      login: (user: User, accessToken: string) => {
        sessionStorage.setItem('accessToken', accessToken)
        set(() => ({ user, isLoggedIn: true }))
      },

      logout: () => {
        sessionStorage.removeItem('accessToken')
        set(() => ({ user: null, isLoggedIn: false}))
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  ),
)

export default useUserStore
