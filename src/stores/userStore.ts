import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
  user: {email: string, token: string} | null
  isLoggedIn: boolean
  login: (email: string, token: string) => void
  logout: () => void
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      login: (email, token) => set({ user: { email, token }, isLoggedIn: true }),
      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'user-storage',
    }
  )
)

export default useUserStore
