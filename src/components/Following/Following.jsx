import { Link} from "react-router-dom"
// css
import styles from './Following.module.css'



const Following = (props) => {

  const handleClick = (e) => {
    if (e.target.innerText === 'Follow') {
      props.handleFollow(props.profile._id)
      e.target.innerText = 'Unfollow'
    } else {
      props.handleUnFollow(props.profile._id)
      e.target.innerText = 'Follow'
    }
  }

  return ( 
    <div className={styles.followingContainer}>
      <p>
        Followers: {props.profile.followers?.length}
      </p>
      <p>
        <Link
          to={`/profiles/${props.profile._id}/following`}
          className={styles.following}
          style={{
            textDecoration: 'none',
            color: '#000', 
            transition: 'color 0.3s', 
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#6f7275'; 
            e.target.style.borderBottom = 'solid 1px #6f7275';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = 'none';
            e.target.style.color = '#000';
          }}
          >
          Following: {props.profile.following?.length} 
          </Link>
      </p>
      {props.profile?._id !== props.user?.profile && 
          <button onClick={handleClick}>
            {!props.profile.followers?.some(p => p === props.user?.profile) 
            ? 'Follow' : 'Unfollow'}
          </button>
      }
    </div>
  )
}

export default Following