import {useEffect, useLayoutEffect, useState, useRef, memo} from 'react';

/*
  || React - Hooks : useEffect

    - The useEffect Hook allows you to perform side effects in your components.
    - Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    - useEffect accepts two arguments. The second argument is optional.

    - useEffect(<function>, <dependency>)
    -- dependency > empty: work evry render, []: only on start, [data]: only data changes

    - using (useLayoutEffect): it make dom change before data change:

    The only time you should be using useLayoutEffect is to measure DOM nodes for things like animations.
    In the example, I measure the textarea after every time you click on it (the onClick is to force a re-render.)
    This means you're running render twice but it's also necessary to be able to capture the correct measurments.

    !! include return to cleainterval??

*/

function Effect(){

  // first code
  useEffect(() => {
    console.log("hi effect!");
  }, [])
  
  console.log("hi");
  let [num, setNum] = useState(5);
  let [num2, setNum2] = useState(5);
  let [done, setDone] = useState(false);
  
function doing(){
  setNum((e) => e + 1)
  if(num >= 10){
    setDone(true);
    setNum2((e) => e + 1);
  }
}
  useEffect(() => {
    console.log(done)
  }, [done]);


  // second code
  const [ width, setWidth] = useState(0);
  const [ height, setHeight] = useState(0);
  const ele = useRef();
  console.log(ele);
  
  useLayoutEffect(() => {
    setWidth(ele.current.clientWidth);
    setHeight(ele.current.clientHeight);
  });



  return(
    <>
      <h1>Effect</h1>
      <section>
        <h3>count: {num}</h3>
        <button onClick={doing}>add</button>
        <h3>count: {num2}</h3>
      </section>

      <hr/>

      <section>
        <h3>ele width: {width}</h3>
        <h3>ele height: {height}</h3>
        <textarea ref={ele} name="" id="" cols="30" rows="10" onClick={() => {
          setWidth(0); // this is basically saying "force update"
        }}></textarea>
      </section>


    </>
  )
}

export default memo(Effect);