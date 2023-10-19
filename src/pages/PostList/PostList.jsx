import React from "react"
import { useTheme } from '../../components/ThemeContext/ThemeContext'

//components
import PostCard from "../../components/PostCard/PostCard"
import SearchPost from "../../components/SearchPost/SearchPost"
import Loading from "../../components/Loading/Loading"

// css
import styles from './PostList.module.css'

const PostList = (props) => {
  const { theme, setTheme } = useTheme()

  if (!props.posts) return <Loading />

  return (
    <div className={styles.postListContainer}>
      <div className={`${styles.postListHeading} ${styles[theme]}`}>
        <h1>All Posts</h1>
      </div>
      <div className={styles.postListSearch}> <SearchPost handlePostSearch={props.handlePostSearch} /></div>
      {props.errMsg && <h2 className={styles.noPostsMsg}>{props.errMsg}</h2>}
      <div className={styles.postCardContainer}>
        {props.isSearch
          ? props.searchResults.map(post =>
            <React.Fragment key={post._id}>
              {post.public && <PostCard key={post._id} post={post} className={styles.postListSearch} />}
            </React.Fragment>)
          : props.posts.map(post =>
            <React.Fragment key={post._id}>
              {post.public && <PostCard key={post._id} post={post} />}
            </React.Fragment>
          )
        }
      </div>
    </div>
  )
}

export default PostList