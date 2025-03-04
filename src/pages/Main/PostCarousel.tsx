import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Card from '@/components/Card'

const posts = [
  { id: 1, title: "Post 1", content: "This is the first post" },
  { id: 2, title: "Post 2", content: "Here's another interesting post" },
  { id: 3, title: "Post 3", content: "More content to explore!" },
]

const PostCarousel = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextPost = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % posts.length)
  }

  return (
    <div className="relative w-full pt-12 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-120 h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <Card
              key={posts[index].id}
              title={posts[index].title}
              content={posts[index].content}
              animationKey={posts[index].id}
              direction={direction}
            />
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
