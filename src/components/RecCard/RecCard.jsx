// css
import styles from './RecCard.module.css'

const RecCard = (props) => {
  console.log('props.author:', props.author)
  console.log('props.user.profile:', props.user.profile);
if (!props.recommendation.name) return <h4>Write a recommendation!</h4>

  return ( 
    <>
    <header>
      {/* author */}
    </header>
      <h4>{props.recommendation.name}</h4>
      <p>{props.recommendation.activity}</p>
      <p>{props.recommendation.time}</p>
      <p>{props.recommendation.rating}</p>
      <p>{props.recommendation.text}</p>
      {/* {props.author === props.user.profile._id &&  <button>Delete</button>} */}
      {props.author._id === props.user.profile && (
          <button onClick={() => props.handleDeleteRec(props.recommendation._id)}>Delete</button>
        )}
    </>
  )
}

export default RecCard