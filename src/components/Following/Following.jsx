const Following = (props) => {
  const hasFollowed = props.profile.followers?.some(p => p._id === props.user.profile)

  const isSelf = props.profile._id === props.user.profile
  
  const handleClick = (e) => {
    props.handleFollow(props.profile._id)
    e.target.innerText = 'Following'
    e.currentTarget.disabled = true
  }

  return ( 
    <>
      <p>Followers: {props.profile.followers?.length}</p>
      <p>Following: {props.profile.following?.length}</p>
      {!isSelf && 
        <button onClick={handleClick} disabled={hasFollowed ? true : false}>
            {hasFollowed ? 'Following' : 'Follow'}
        </button>
      }
    </>
  )
}
 
export default Following