//npm modules
import { Link } from 'react-router-dom'
//components
import AuthorInfo from '../AuthorInfo/AuthorInfo'
//css
import styles from './PostCard.module.css'

const PostCard = ({ post }) => {
  return ( 
    <Link to={`/posts/${post._id}`} key={post._id}>
      <article className={styles.postcardContainer}>
        <header>
          <h1 key={post._id}>{post.title}</h1>
          {/* main photo */}
          <AuthorInfo content={post}/>
        </header>
        <p key={post._id}>{post.location}</p>
      </article>
    </Link>
  )
}

export default PostCard