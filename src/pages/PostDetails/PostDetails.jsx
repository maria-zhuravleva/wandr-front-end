//npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

//services
import * as postService from '../../services/postService'

//components
import Loading from '../../components/Loading/Loading'
import NewComment from '../../components/NewComment/NewComment'
import CommentCard from '../../components/CommentCard/CommentCard'
import Recommendation from '../../components/Recommendation/Recommendation'
import RecCard from '../../components/RecCard/RecCard'
import MorePhotosUpload from '../../components/UploadPhoto/MorePhotosUpload'
import PhotoCard from '../../components/PhotoCard/PhotoCard'

//css
import styles from './PostDetails.module.css'
import likesIcon from "../../assets/icons/likes.png"
import savesIcon from "../../assets/icons/saves.png"
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import DefaultPhoto from '../../assets/img/default-pic2.jpg'

const PostDetails = (props) => {
  const [post, setPost] = useState(null)
  const { postId } = useParams()
  const [showMorePhotosUploadField, setShowMorePhotosUploadField] = useState(false)
  const [currSlide, setCurrSlide] = useState(1)
  const [slideCount, setSlideCount] = useState(1)

  useEffect(() => {
    const fetchPost = async () => {
      const PostData = await postService.show(postId)
      setPost(PostData)
      setSlideCount(PostData.morePhotos.length)
    }
    fetchPost()
  }, [postId])

  const handleAddComment = async (commentFormData) => {
    const newComment = await postService.createComment(postId, commentFormData)
    setPost({ ...post, comments: [...post.comments, newComment] })
  }

  const handleAddRec = async (recFormData) => {
    const newRecommendation = await postService.createRec(postId, recFormData)
    setPost({ ...post, recommendations: [...post.recommendations, newRecommendation] })
  }

  const handleDeleteRec = async (recId) => {
    const deltedRec = await postService.deleteRec(postId, recId)
    setPost({ ...post, recommendations: post.recommendations.filter(rec => rec._id !== deltedRec._id) })
  }

  const handleDeleteComment = async (commentId) => {
    const deletedComment = await postService.deleteComment(postId, commentId)
    setPost({ ...post, comments: post.comments.filter(cmt => cmt._id !== deletedComment._id) })
  }

  const handleEditComment = async (commentFormData) => {
    const editedComment = await postService.editComment(postId, commentFormData)
    setPost({ ...post, comments: post.comments.map(cmt => cmt._id === commentFormData._id ? editedComment : cmt) })
  }

  const handleEditRec = async (recFormData) => {
    const editedRec = await postService.editRec(postId, recFormData)
    setPost({ ...post, recommendations: post.recommendations.map(rec => rec._id === recFormData._id ? editedRec : rec) })
  }

  const handleLikePost = async () => {
    const like = await postService.likePost(postId)
    setPost({ ...post, likes: [...post.likes, like] })
  }

  const handleUnlikePost = async () => {
    const unlike = await postService.unlikePost(postId)
    setPost({ ...post, likes: post.likes.filter(p => p !== unlike) })
  }

  const handleClickLike = (e) => {
    if (e.target.innerText === 'LIKE') {
      handleLikePost(postId)
      e.target.innerText = 'UNLIKE'
    } else {
      handleUnlikePost(postId)
      e.target.innerText = 'LIKE'
    }
  }

  const handleSavePost = async () => {
    const save = await postService.savePost(postId)
    setPost({ ...post, saves: [...post.saves, save] })
  }

  const handleUnsavePost = async () => {
    const saveList = await postService.unsavePost(postId)
    setPost({ ...post, saves: saveList })
  }

  const handleClickSave = (e) => {
    if (e.target.innerText === 'SAVE') {
      handleSavePost()
      e.target.innerText = 'UNSAVE'
    } else {
      handleUnsavePost()
      e.target.innerText = 'SAVE'
    }
  }

  const handleShowMore = () => {
    setShowMorePhotosUploadField(true)
  }

  const handleHideMore = () => {
    setShowMorePhotosUploadField(false)
  }

  const handleChangeSlide = (e) => {
    e.target.id === 'moveRight' ? setCurrSlide(currSlide + 1) : setCurrSlide(currSlide - 1)
  }

  const handleClickSlide = (idx) => {
    setCurrSlide(idx + 1)
  }

  const handleAddMorePostPhotos = async (postId, photoData) => {
    const photo = await postService.addMorePostPhotos(postId, photoData)
    setPost({ ...post, morePhotos: [...post.morePhotos, photo] })
    setSlideCount(slideCount + 1)
  }

  const handleDeleteMorePhotos = async (photoId) => {
    const deletedPhoto = await postService.deleteMorePostPhotos(postId, photoId)
    setPost({ ...post, morePhotos: post.morePhotos.filter(p => p._id !== deletedPhoto._id) })
    setSlideCount(slideCount - 1)
  }

  if (!post) return <Loading />

  return (
    <div>
      <div className={styles.cardDetailsContainer}>
        <div className={styles.textContainer}>
          <h1>{post.title}</h1>
          <div className={styles.cardLocation}>
            <p>{post.location}</p>
          </div>
          <AuthorInfo content={post} />
          <div className={styles.cardContent}>
            <p>{post.content}</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={slideCount ? post.morePhotos[currSlide - 1].url : DefaultPhoto} alt="Post Photos" />
          {<button id='moveLeft' onClick={(e) => handleChangeSlide(e)} disabled={!slideCount || currSlide === 1}>◀︎</button>}
          {<button id='moveRight' onClick={(e) => handleChangeSlide(e)} disabled={!slideCount || slideCount === 1 || currSlide === slideCount}>▶︎</button>}
        </div>
        <div className={styles.imageCollection}>
          {post.morePhotos.map((photo, idx) =>
            <PhotoCard key={idx} photo={photo} idx={idx} post={post} user={props.user} handleDeleteMorePhotos={handleDeleteMorePhotos} handleClickSlide={handleClickSlide} />
          )}
        </div>
      </div>
      <div className={styles.likeAndSaveBtn}>
        <div className={styles.likeCount}>
          <img src={likesIcon} alt="Likes" className={styles.likeImg} />
          {post.likes.length}
        </div>
        <div className={styles.saveCount}>
          <img src={savesIcon} alt="Saves" className={styles.saveImg} />
          {post.saves.length}
        </div>
        {props.user?.profile && post.author?._id !== props.user?.profile
          && <button
            onClick={handleClickLike}
            className={styles.likeBtn}>
            {!post.likes.some(p => p === props.user?.profile) ? 'LIKE' : 'UNLIKE'}
          </button>
        }
        {props.user?.profile && post.author?._id !== props.user?.profile
          && <button
            onClick={handleClickSave}
            className={styles.saveBtn}>
            {!post.saves.some(p => p === props.user?.profile) ? 'SAVE' : 'UNSAVE'}
          </button>
        }
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.cardDetailsBtn}>
          {props.user?.profile && post.author?._id === props.user?.profile && (
            <>
              <Link to={`/posts/${postId}/edit`} state={post}>
                <button className={styles.editBtn}>
                  Edit
                </button>
              </Link>
              <button onClick={() => props.handleDeletePost(postId)} className={styles.deleteBtn}>
                Delete
              </button>
            </>
          )}
        </div>
        <div className={styles.cardPhotosBtn}>
          {props.user?.profile && post.author?._id === props.user?.profile && (
            <>
              {post.morePhotos.length < 6
                && <button onClick={handleShowMore}>
                  Upload Photos
                </button>}
              {showMorePhotosUploadField && <MorePhotosUpload post={post} handleAddMorePostPhotos={handleAddMorePostPhotos} handleHideMore={handleHideMore} />}
            </>
          )}
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.commentsContainer}>
          <h3>Comments</h3>
          {props.user?.profile && <NewComment handleAddComment={handleAddComment} />}
          {post.comments.map(comment =>
            <CommentCard key={comment._id} comment={comment} user={props.user} handleDeleteComment={handleDeleteComment} handleEditComment={handleEditComment}
            />
          )}
        </div>
        <div className={styles.recommendationsContainer}>
          {props.user?.profile && post.author?._id === props.user?.profile && (
            <Recommendation user={props.user} handleAddRec={handleAddRec} />
          )}
          {post.recommendations.map((recommendation) => (
            <RecCard
              key={recommendation._id}
              recommendation={recommendation}
              user={props.user}
              handleDeleteRec={handleDeleteRec}
              handleEditRec={handleEditRec}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostDetails