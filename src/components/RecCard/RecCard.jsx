// css
import styles from './RecCard.module.css'

const RecCard = (props) => {
  return ( 
    <>
      <h4>{props.recommendation.name}</h4>
      <p>{props.recommendation.activity}</p>
      <p>{props.recommendation.time}</p>
      <p>{props.recommendation.rating}/5</p>
      <p>{props.recommendation.text}</p>
      {props.author._id === props.user?.profile && (
          <button onClick={() => props.handleDeleteRec(props.recommendation._id)}>Delete</button>
        )}
    </>
  )
}

export default RecCard