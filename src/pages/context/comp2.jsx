import Comp3 from './comp3'; 

function Comp2({person}){

  return(
    <>
      <h1>comp2:</h1>
      <Comp3 person={person}/>
    </>
  )
}
export default Comp2;