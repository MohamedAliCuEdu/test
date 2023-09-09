import {useRef, useState} from 'react';

/*
  || React - Hooks : useRef

    - it used for storing and selecting html dom:
    -- by make avariable
    -- use ref attr in ele its value the variable

    - dont cause a re-render

*/

function Ref(){

  const [timer, setTimer] = useState(0);
  const timerId = useRef(0);

  const num = useRef(5);
  console.log(num);
  console.log("hi");

  let start = () => {
    timerId.current = setInterval(() => {
      setTimer(e => e + 1);
    }, 1000)
  }
  let stop = () => {
    clearInterval(timerId.current);
  }
  let reset = () => {
    timerId.current = setTimer(0);
  }
  


  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.style = "padding: 20px;";
  };


  return(
    <>
      <h1>UseRef:</h1>
      <div>
        <p>timer: {timer}</p>
        <div className="btns">
          <button onClick={start}>start</button>
          <button onClick={stop}>stop</button>
        </div>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <h2>focus:</h2>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </>
  )


}

export default Ref;

