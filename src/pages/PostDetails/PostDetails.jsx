//npm modules
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
//services
import * as postService from '../../services/postService'
//css
import styles from './PostDetails.module.css'

const PostDetails = (props) => {
  const [post, setPost] = useState(null)
  const { postId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      const PostData = await postService.show(postId)
      console.log(PostData)
      setPost(PostData)
    }
   fetchPost()
  }, [postId])

  return ( 
    <h1>Post Details here</h1>
   )
}
 
export default PostDetails