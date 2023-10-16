const PhotoCard = (props) => {
  return ( 
    <>
      <img src={props.photo} alt={`Post Photo ${props.idx}`} />
      <button onClick={() => props.handleDeleteMorePhotos(props.idx)}>❌</button>
    </>
   )
}
 
export default PhotoCard