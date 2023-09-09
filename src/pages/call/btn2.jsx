import { memo } from "react";

function Btn2({increment}){
  console.log("btn");

  return(
    <button onClick={increment}>num++</button>
  )
}

export default memo(Btn2);