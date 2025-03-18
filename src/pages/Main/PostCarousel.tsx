import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import postService from '@/services/postService'
import Card from '@/components/Card'
import { PostWithId } from '@/types/post'

const PostCarousel = () => {
  const [posts, setPosts] = useState<PostWithId[]>([])
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // TEST: change "testGetRandomPosts" to "getRandomPosts"
        const fetchedPosts = await postService.getRandomPosts()
        const postsForCard = fetchedPosts.map((post, idx) => ({
          id: idx + 1,
          ...post,
        }))
        setPosts(postsForCard)
      } catch (error) {
        console.error("Error fetching posts", error)
      }
    }

    fetchPosts()
  }, [])

  const postRead = (postId: number) => {
    postService.readPost(postId)
  }

  const nextPost = () => {
    postRead(posts[index].postId)
    setDirection(1)
    setIndex((prev) => (prev + 1) % posts.length)
  }

  return (
    <div className="relative w-full pt-12 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-120 h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {posts.length > 0 && (
              <Card
              key={posts[index].id}
              post={posts[index]}
              animationKey={posts[index].id}
              direction={direction}
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
      </div>
    </div>
  )
}

export default PostCarousel
