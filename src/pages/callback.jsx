import { memo, useCallback, useState,useEffect } from "react";
import Btn from './call/btn';
import Btn2 from './call/btn2';

function Callback(){

  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(6);

  // it used to memorize the func => so it doesnt re-render when any thing chane
  // and its change only from dependencies
  const numIncrement1 = useCallback(() => {
    setNum1((n) => n + 1);
  }, [num1]);


  let numIncrement2 = () => {
    setNum2(num2 + 1);
  };

  useEffect(() => {
    console.log("render");
  }, [num1]);

  useEffect(() => {
    console.log("render");
  }, [num2]);


  return(
    <>
      <p>num1: {num1}</p>
      <Btn increment = {numIncrement1}/>
      <p>num1: {num2}</p>
      <Btn2 increment = {numIncrement2}/>
    </>
  )
}

export default memo(Callback);