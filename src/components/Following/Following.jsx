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
    <>
      <p>Followers: {props.profile.followers?.length}</p>
      <p>Following: {props.profile.following?.length}</p>
      {props.profile?._id !== props.user?.profile && 
          <button onClick={handleClick}>
            {!props.profile.followers?.some(p => p === props.user?.profile) 
            ? 'Follow' : 'Unfollow'}
          </button>
      }
    </>
  )
}
 
export default Following