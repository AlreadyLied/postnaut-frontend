import { useState, useEffect } from 'react'
import postService from '@/services/postService'
import { PostDto } from '@/types/post'
import PostCard from '@/pages/Posts/PostCard'

const MyPosts = () => {
  const [posts, setPosts] = useState<PostDto[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const myPosts = await postService.myPosts()
        setPosts(myPosts)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching posts", error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="w-3/4 mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="h-3/4 overflow-y-auto p-2 space-y-3">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No content</p>
          ) : (
            posts.map((post) => (
              <PostCard
                title={post.title ?? "Untitled"}
                contents={post.content}
                likeCount={post.likeCount}
                viewCount={post.viewCount}
                commentCount={0}
              />
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default MyPosts
