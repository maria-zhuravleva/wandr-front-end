//npm modules
import { Link } from 'react-router-dom'
//components
import AuthorInfo from '../AuthorInfo/AuthorInfo'
//css
import styles from './PostCard.module.css'
import likesIcon from "../../assets/icons/likes.png"

const PostCard = ({ post }) => {
  return ( 
      <Link to={`/posts/${post._id}`} key={post._id}>
        <article className={styles.postcardContainer}>
          <header>
            <h4 key={post._id}>{post.title}</h4>
            <AuthorInfo content={post}/>
          </header>
            <div className={styles.infoContainer}>
              <p><img src={likesIcon}/> {post.likes.length}</p>
              <p key={post._id}>{post.location}</p>
            </div>
          {post.morePhotos[0] && <img className={styles.imageContainer} src={post.morePhotos[0].url} />}
        </article>
      </Link>
  )
}

export default PostCard