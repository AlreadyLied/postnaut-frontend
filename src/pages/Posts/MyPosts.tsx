import { useState, useEffect } from 'react'
import postService from '@/services/postService'
import { PostDto } from '@/types/post'
import PostCard from '@/pages/Posts/PostCard'
import usePostStore from '@/stores/postStore'
import useNavigation from '@/hooks/useNavigation'

const MyPosts = () => {
  const [posts, setPosts] = useState<PostDto[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { setCurrentPost } = usePostStore()
  const { goToReplies } = useNavigation()

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

  const buttonClicked = (postId: number) => {
    setCurrentPost(postId)
    goToReplies()
  }

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
                key={post.postId}
                postId ={post.postId}
                title={post.title ?? "Untitled"}
                contents={post.content}
                likeCount={post.likeCount}
                viewCount={post.viewCount}
                commentCount={0}
                isHidden={post.isHidden}
                onClick={() => buttonClicked(post.postId)}
              />
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default MyPosts
