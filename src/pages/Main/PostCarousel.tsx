import { useState, useEffect } from 'react'
import { PostDto } from '@/types/post'
import postService from '@/services/postService'
import useUserStore from '@/stores/userStore'
import PostIt from '@/pages/Main/PostIt'

const PostCarousel = () => {
  const [postIt, setPostIt] = useState<PostDto>()
  const [noPost, setNoPost] = useState<boolean>(true)
  const {isLoggedIn} = useUserStore()

  useEffect(() => {
    getPost()
  }, [])

  const postRead = async (postId: number) => {
    await postService.readPost(postId)
  }

  const getPost = async () => {
    try {
      const fetchedPost = await postService.getRandomPost()
      if (!fetchedPost) {
        setNoPost(true)
        setPostIt(undefined)
      } else {
        setNoPost(false)
        setPostIt(fetchedPost)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toNextPost = async () => {
    try {
      if (isLoggedIn && postIt) {
        await postRead(postIt.postId)
      }
      await getPost()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (postId: number, comment: string) => {
    if (comment.trim() === "") {
      console.log("no content")
      return
    }
    try {
      await postService.addReply(postId, comment)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative w-full pt-12 overflow-hidden">
      {!noPost && postIt ?
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-120 h-80 flex items-center justify-center">
            <PostIt
              post={postIt}
              onClick={(comment) => handleSubmit(postIt.postId, comment)}
            />
          </div>

          <button
            onClick={toNextPost}
            className="mt-1 p-3 w-32 bg-gray-500 text-white rounded-lg shadow-md"
          >
            Next
          </button>
        </div>
        :
        <h2 className="text-lg text-center">No Contents</h2>
      }
    </div>
  )
}

export default PostCarousel
