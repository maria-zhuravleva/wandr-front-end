//npm modules
import { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
//services
import * as postService from '../../services/postService'
//components
import Loading from '../../components/Loading/Loading'
import NewComment from '../../components/NewComment/NewComment'
import CommentCard from '../../components/CommentCard/CommentCard'
import Recommendation from '../../components/Recommendation/Recommendation'
import RecCard from '../../components/RecCard/RecCard'
import PhotoUpload from '../../components/UploadPhoto/MainPostPhoto'

//css
import styles from './PostDetails.module.css'
import likesIcon from "../../assets/icons/likes.png"
import savesIcon from "../../assets/icons/saves.png"

const PostDetails = (props) => {
  const [post, setPost] = useState(null)
  const { postId } = useParams()

  const [showPhotoUploadField, setShowPhotoUploadField] = useState(false)

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
  
  const handleEditComment = async (commentFormData) => {
    const editedComment = await postService.editComment(postId, commentFormData)
    setPost({...post, comments: post.comments.map(cmt => cmt._id === commentFormData._id ? editedComment : cmt)})
  }

  const handleLikePost = async (profileId) => {
    const like = await postService.likePost(postId, profileId)
    setPost({...post, likes: [...post.likes, like]})
  }

  const handleSavePost = async (profileId) => {
    const save = await postService.savePost(postId, profileId)
    setPost({...post, saves: [...post.saves, save]})
  }

  const handleShow = () => {
    setShowPhotoUploadField(true)
  }

  const handleDeletePostPhoto = async () => {
    const post = await postService.deletePostPhoto(postId)
    setPost(post)
  }

  if (!post) return <Loading />

  return ( 
    <main>
      <div className={styles.cardDetailsContainer}>
        <div className={styles.textContainer}>
          <h1>{post.title}</h1>
          {/* author info */}
          <div className={styles.cardLocation}>
            <p>{post.location}</p>
          </div>
          <div className={styles.cardContent}>
            <p>{post.content}</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={post.mainPhoto} alt="Post Main Photo" />
        </div>
      </div>

      <div className={styles.likeAndSaveBtn}>       
        {post.author._id !== props.user.profile 
          && !post.likes.some(p => p === props.user.profile)
          && <button onClick={() => handleLikePost(props.user.profile)}>Like</button>
        }
        <div className={styles.likeCount}>
          <img src={likesIcon} alt="Likes" className={styles.likeImg} />  
          : {post.likes.length}
        </div>

        {post.author._id !== props.user.profile 
          && !post.saves.some(p => p === props.user.profile)
          && <button onClick={() => handleSavePost(props.user.profile)}>Save</button>
        }
        <div className={styles.saveCount}>
          <img src={savesIcon} alt="Saves" className={styles.saveImg} /> 
          : {post.saves.length}
        </div>       
      </div>

      <div className={styles.cardDetailsBtn}>
        {post.author._id === props.user.profile && (
          <>
            <Link to={`/posts/${postId}/edit`} state={post}>
              <button>
                Edit</button>
            </Link>
            <button onClick={() => props.handleDeletePost(postId)}>
                Delete</button>
            <button onClick={handleShow}>
              {post.mainPhoto ? 'Edit Main Photo' : 'Upload Main Photo'}
            </button>
            {post.mainPhoto && <button onClick={handleDeletePostPhoto}>Delete Main Photo</button>}
            {showPhotoUploadField && <PhotoUpload post={post} />}
          </>
        )}
      </div>


      <div className={styles.recommendationsContainer}>
        <Recommendation user={props.user} handleAddRec={handleAddRec}/>
        {post.recommendations.map(recommendation => 
          <RecCard key={recommendation._id} recommendation={recommendation} user={props.user}  />
        )}
      </div>

      <div className={styles.commentsContainer}>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment} />
        {post.comments.map(comment => 
          <CommentCard key={comment._id} comment={comment} user={props.user} handleDeleteComment={handleDeleteComment} handleEditComment={handleEditComment}
          />
        )}
      </div>
    </main>
  )
}

export default PostDetails