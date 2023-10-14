//npm modules
import { Link } from 'react-router-dom'
//css
import styles from './PostCard.module.css'

const PostCard = ({ post }) => {
  return ( 
      <Link to={`/posts/${post._id}`}>
        <article className={styles.container}>
          <header>
            <h1>{post.title}</h1>
            {/* main photo */}
            {/* author info ? */}
          </header>
            <p>{post.location}</p>
        </article>
      </Link>
   )
}
 
export default PostCard