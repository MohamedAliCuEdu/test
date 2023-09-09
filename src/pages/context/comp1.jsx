import Comp2 from './comp2'; 

function Comp1({person}){

  return(
    <>
      <h1>comp1:</h1>
      <Comp2 person={person}/>
    </>
  )
}
export default Comp1;