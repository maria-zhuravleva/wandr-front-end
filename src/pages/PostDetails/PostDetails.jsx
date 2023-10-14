//npm modules
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
//services
import * as postService from '../../services/postService'
//components
import Loading from '../../components/Loading/Loading'
import NewComment from '../../components/NewComment/NewComment'
import CommentCard from '../../components/CommentCard/CommentCard'
import Recommendation from '../../components/Recommendation/Recommendation'

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

  // NOT YET FUNCTIONAL - working to fix
  const handleAddRec= async (recFormData) => {
    const newRecommendation = await postService.createRec(postId, recFormData)
    setPost({...post, recommendations: [...post.recommendations, newRecommendation]})
  }

  const handleDeleteComment = async (commentId) => {
    const deletedComment = await postService.deleteComment(postId, commentId)
    setPost({...post, comments: post.comments.filter(cmt => cmt._id !== deletedComment._id)})
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
                <Link to={`/posts/${postId}/edit`} state={post}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => props.handleDeletePost(postId)}>Delete</button>
              </>
            }
          </span>
        </header>
        <p>{post.content}</p>
      </article>

      <section>
        <Recommendation user={props.user} handleAddRec={handleAddRec}/>
        {post.recommendations.map(recommendation => 
          <Recommendation key={recommendation._id} recommendation={recommendation} user={props.user}  />
        )}
      </section>

      <section>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment} />
        {post.comments.map(comment => 
          <CommentCard key={comment._id} comment={comment} user={props.user} handleDeleteComment={handleDeleteComment} />
        )}
      </section>
    </main>
  )
}

export default PostDetails