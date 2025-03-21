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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="h-96 overflow-y-auto border rounded-lg p-2 space-y-3">
          {posts.map((post) => (
            <PostCard
              title='null'
              contents={post.content}
              likeCount={post.likeCount}
              viewCount={post.viewCount}
              commentCount={0}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyPosts
