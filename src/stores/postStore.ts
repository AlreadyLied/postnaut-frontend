import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PostStore {
  currentPostId: number,
  setCurrentPost: (postId: number) => void,
}

const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      currentPostId: 0,
      setCurrentPost: (postId) => set({currentPostId: postId}),
    }),
    {
      name: 'post-storage',
    }
  )
)

export default usePostStore
