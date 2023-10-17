import styles from './PhotoCard.module.css'

const PhotoCard = (props) => {
  return ( 
    <main className={styles.container}>
      <img src={props.photo.url} alt={`Post Photo ${props.idx}`} />
      <button /* onClick={() => props.handleDeleteMorePhotos(props.idx)} */>❌</button>
    </main>
   )
}
 
export default PhotoCard