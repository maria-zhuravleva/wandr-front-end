//css
import styles from './PostCard.module.css'

const PostCard = (props) => {
  return ( 
    <main>
      <article className={styles.container}>
        <header>
          <h1>{props.post.title}</h1>
          {/* main photo */}
          {/* author info ? */}
        </header>
          <p>{props.post.location}</p>
      </article>
    </main>
   )
}
 
export default PostCard