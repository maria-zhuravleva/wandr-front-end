//npm modules
import { useState, useEffect, useLocation } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
//services
import * as postService from '../../services/postService'
//components
import Loading from '../../components/Loading/Loading'
import NewComment from '../../components/NewComment/NewComment'
import CommentCard from '../../components/CommentCard/CommentCard'
import Recommendation from '../../components/Recommendation/Recommendation'
import RecCard from '../../components/RecCard/RecCard'

//css
import styles from './PostDetails.module.css'

const PostDetails = (props) => {
  const [post, setPost] = useState(null)
  const { postId } = useParams()

  const navigate = useNavigate()

  // const { commentState } = useLocation()

  useEffect(() => {
    const fetchPost = async () => {
      const PostData = await postService.show(postId)
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

  const handleEditComment = async (commentId) => {
    
  }

  const handleLikePost = async (profileId) => {
    const like = await postService.likePost(postId, profileId)
    setPost({...post, likes: [...post.likes, like]})
  }

  if (!post) return <Loading />

  return ( 
    <main>
      <article className={styles.container}>
        <header>
          <h1>{post.title}</h1>
          <span>
            {/* author info */}
            {post.author._id === props.user.profile && 
              <>
                <Link to={`/posts/${postId}/edit`} state={post}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => props.handleDeletePost(postId)}>Delete</button>
              </>
            }
            {post.author._id !== props.user.profile 
            && !post.likes.some(p => p == props.user.profile)
            && <button onClick={() => handleLikePost(props.user.profile)}>Like</button>}
            {/* display number of likes here */}
            <div>✈️ {post.likes.length}</div>
          </span>
        </header>
        <p>{post.content}</p>
      </article>

      <section>
        <Recommendation user={props.user} handleAddRec={handleAddRec}/>
        {post.recommendations.map(recommendation => 
          <RecCard key={recommendation._id} recommendation={recommendation} user={props.user}  />
        )}
      </section>

      <section>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment} />
        {post.comments.map(comment => 
          <CommentCard key={comment._id} comment={comment} user={props.user} handleDeleteComment={handleDeleteComment} handleEditComment={handleEditComment}
          />
        )}
      </section>
    </main>
  )
}

export default PostDetails