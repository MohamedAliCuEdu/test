import { memo } from "react";

function Btn({increment}){
  console.log("btn");

  return(
    <button onClick={increment}>num++</button>
  )
}

export default memo(Btn);