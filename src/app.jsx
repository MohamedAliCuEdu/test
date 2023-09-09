import { Routes, Route, Link} from "react-router-dom";
import React from 'react';


// You can handle events by passing a function as a prop to an element like <button>.
// Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
// You can define an event handler function separately or inline.
// Event handlers are defined inside a component, so they can access props.
// You can declare an event handler in a parent and pass it as a prop to a child.
// You can define your own event handler props with application-specific names.
// Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
// Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
// Explicitly calling an event handler prop from a child handler is a good alternative to propagation.

// pages
import Home from "./pages/home";
import Products from "./pages/products";
import Reducer from "./pages/reducer";
import Ref from "./pages/ref";
import Effect from "./pages/effect";
import CallBack from "./pages/callback";
import Memo from "./pages/memo";
import Context from "./pages/context/context";


function App(){
  const [num, setNum] = React.useState(5);
  function inc (){
    setNum((e) => e + 1);
    console.log(num);
  }

  return(
    <>
    <div>
      <p onClick={inc}>num is: {num}</p>
    </div>
      <div className="links">
        <Link to="/">home </Link>
        <Link to="/products">products </Link>
        <Link to="/reducer">reducer </Link>
        <Link to="/ref">ref </Link>
        <Link to="/effect">effect </Link>
        <Link to="/callBack">callback </Link>
        <Link to="/memo">memo </Link>
        <Link to="/Context">context </Link>
      </div>

      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/reducer" element={<Reducer/>}></Route>
        <Route path="/ref" element={<Ref/>}></Route>
        <Route path="/effect" element={<Effect/>}></Route>
        <Route path="/callback" element={<CallBack/>}></Route>
        <Route path="/memo" element={<Memo/>}></Route>
        <Route path="/context" element={<Context/>}></Route>
      </Routes>
    </>

  );
}

export default App;