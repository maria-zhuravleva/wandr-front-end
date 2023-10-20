import styles from './PhotoCard.module.css'
import deleteIcon from "../../assets/icons/delete.png"

const PhotoCard = (props) => {
  const handleClickImg = (idx) => {
    props.handleClickSlide(idx)
  }

  return (
    <main className={styles.morePhotosContainer}>
      <button onClick={() => handleClickImg(props.idx)}>
        <img src={props.photo.url} alt={`Post Photo ${props.idx}`} className={styles.userImg} />
      </button>
      <button onClick={() => props.handleDeleteMorePhotos(props.photo._id)}>
        <img src={deleteIcon} alt="Delete" className={styles.deleteIcon} style={{ outline: 'none', border: 'none' }} />
      </button>
    </main>
  )
}

export default PhotoCard