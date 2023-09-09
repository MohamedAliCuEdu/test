import {useState, createContext} from 'react';
import Comp1 from './comp1';
import Comp3 from './comp3';

// useContext:
/*
  -its used for inherit data in deep components

  how it works:
    - in main file => create context comp by using {createContext}
        { export const ConComp = createContext(); }
    - wrap target comp in <contextName.Provider value={{}}>
    - put data in value

    - deep comps => import context comp from main file
    - use {useContext} => const data = useContext(contextComp);
    - if there mone data use destructure and put the same name of data
        => const {data} = useContext(contextComp);

    - you can make context file and import it
*/

export const ConComp = createContext();

function Context(){

  const [person, setPerson] = useState("Ali");
  
  const [man, setMan] = useState("Man");
  const fun = () =>{
    console.log("hi");
  }

  
  return(
    <>
      <h1>context:</h1>
      <Comp1 person={person}/>
      <ConComp.Provider value={{fun}}>
        {/*
          - value should contain an object => {{}}
          - use context compwith provider to wrap all comps
        */}
        <Comp3/>
      </ConComp.Provider>
    </>
  )
}
export default Context;