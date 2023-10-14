//npm modules
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
//services
import * as postService from '../../services/postService'
//components
import Loading from '../../components/Loading/Loading'
import NewComment from '../../components/NewComment/NewComment'
import CommentCard from '../../components/CommentCard/CommentCard'
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

  const handleAddComment = async (commentFormData) => {
    const newComment = await postService.createComment(postId, commentFormData)
    setPost({...post, comments: [...post.comments, newComment]})
  }

  if (!post) return <Loading />

  return ( 
    <main>
      <article className={styles.container}>
        <header>
          <h1>{post.title}</h1>
          <span>
            {/* author info */}
            {post.author === props.user.profile && 
              <>
                <button>Edit</button>
                <button>Delete</button>
              </>
            }
          </span>
        </header>
        <p>{post.content}</p>
      </article>

      <section>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment} />
        {post.comments.map(comment => 
          <CommentCard key={comment._id} comment={comment} user={props.user}/>
        )}
      </section>
    </main>
   )
}
 
export default PostDetails