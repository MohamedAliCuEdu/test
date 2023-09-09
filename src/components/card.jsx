function Card(props){
  return(
    <>
    <div className="card">
      <h3>{props.ele.name}</h3>
      <button onClick={() => props.delete(props.ele.id)}>delete</button>
      <button  onClick={() => props.increment(props.ele.id)}>add</button>
      <p>{props.ele.age}</p>
    </div>
  </>
  )
}
export default Card;
