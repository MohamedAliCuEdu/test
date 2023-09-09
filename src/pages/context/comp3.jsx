import { useContext } from "react";
import {ConComp} from './context';

function Comp3({person}){

  const context = useContext(ConComp);
  const fun = context;

  return(
    <>
      <h1>comp3:</h1>
      <div>{person}</div>
      {/* <div>{man}</div> */}
      <button onClick={fun}>double</button>
    </>
  )
}
export default Comp3;