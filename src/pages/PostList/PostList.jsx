import React from "react"
//components
import PostCard from "../../components/PostCard/PostCard"
import SearchPost from "../../components/SearchPost/SearchPost"

const PostList = (props) => {



  return ( 
    <main>
       <h1>Post List </h1>
      {props.errMsg && <h2>{props.errMsg}</h2>}
      <h2> <SearchPost handlePostSearch={props.handlePostSearch}/></h2>
      {props.isSearch ?
      props.searchResults.map(post =>
     <React.Fragment key={post._id}>
     {post.public && <PostCard key={post._id} post={post} />}
     </React.Fragment>)
      :
    props.posts.map(post =>  
      <React.Fragment key={post._id}>
      {post.public && <PostCard key={post._id} post={post} />}
      </React.Fragment>
    )}
      
    </main>
  )
}

export default PostList