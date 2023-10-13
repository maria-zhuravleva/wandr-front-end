//components
import PostCard from "../../components/PostCard/PostCard"

const PostList = (props) => {
  return ( 
    <main>
    <h1>Post List</h1>
    {props.posts.map(post =>  
      <>
      {post.public && <PostCard key={post._id} post={post} />}
      </>
    )}
    </main>
   )
}
 
export default PostList