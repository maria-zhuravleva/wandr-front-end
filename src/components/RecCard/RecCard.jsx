// css
import styles from './RecCard.module.css'

const RecCard = (props) => {
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
      {props.author === props.user.profile._id &&  <button>Delete</button>}
      {/* {props.author === props.user.profile._id &&  <button onClick={() => props.handleDeleteRec(props.recommendation._id)}>Delete</button>} <= ADD handleDeleteRec  once backend is written for it*/} 
    </>
  )
}

export default RecCard