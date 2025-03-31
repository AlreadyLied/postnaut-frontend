import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import postService from '@/services/postService'
import Card from '@/components/Card'
import { PostWithId } from '@/types/post'
import useUserStore from '@/stores/userStore'

const PostCarousel = () => {
  const [posts, setPosts] = useState<PostWithId[]>([])
  const [index, setIndex] = useState(0)
  const [isEmpty, setIsEmpty] = useState(true)
  const {isLoggedIn} = useUserStore()

  useEffect(() => {
    const initialPosts = async () => {
      try {
        const fetchedPosts = await postService.getRandomPosts()
        
        const postsForCard = fetchedPosts.map((post, idx) => ({
          id: idx + 1,
          ...post,
        }))

        if (postsForCard.length === 0) {
          setIsEmpty(true)
        } else {
          setIsEmpty(false)
          setPosts(postsForCard)
        }
      } catch (error) {
        console.log(error)
      }
    }

    initialPosts()
  }, [])

  const updatePosts = async () => {
    try {
      const fetchedPosts = await postService.getRandomPosts()

      setIndex(0)
      setPosts([])
      const postsForCard = fetchedPosts.map((post, idx) => ({
        id: idx + 1,
        ...post,
      }))
      
      if (postsForCard.length === 0) {
        setIsEmpty(true)
      } else {
        setIsEmpty(false)
        setPosts(postsForCard)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const postRead = async (postId: number) => {
    await postService.readPost(postId)
  }

  const nextPost = async () => {
    if (isLoggedIn) {
      await postRead(posts[index].postId)
    }

    const nextIndex = index + 1
    if (nextIndex === posts.length) {
      await updatePosts()
    }
    else {
      setIndex(nextIndex)
    }
  }

  return (
    <div className="relative w-full pt-12 overflow-hidden">
      {isEmpty ?
      <h2 className="text-lg text-center">No Contents</h2>
      :
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-120 h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {posts.length > 0 && (
              <Card
              key={posts[index].id}
              post={posts[index]}
              animationKey={posts[index].id}
              direction={1}
              />
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={nextPost}
          className="mt-1 p-3 w-32 bg-gray-500 text-white rounded-lg shadow-md"
        >
          Next
        </button>
      </div>}
    </div>
  )
}

export default PostCarousel
