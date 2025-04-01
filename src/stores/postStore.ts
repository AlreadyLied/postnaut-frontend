import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PostStore {
  currentPostId: number | null,
  setCurrentPost: (postId: number) => void,
}

const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      currentPostId: null,
      setCurrentPost: (postId) => set({currentPostId: postId}),
    }),
    {
      name: 'post-storage',
    }
  )
)

export default usePostStore
