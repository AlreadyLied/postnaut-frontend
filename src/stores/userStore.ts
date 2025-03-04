import { User } from '@/types/user'
import { create } from 'zustand'

interface UserStore {
  user: User | null
  isLoggedIn: boolean
  login: (email: string, token: string) => void
  logout: () => void
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (email, token) => set({user: {email, token}, isLoggedIn: true}),
  logout: () => set( {user: null}),
}))

export default useUserStore
