import { useReducer } from "react";

/*
  || React - Hooks : useReduser

    The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
    The useReducer Hook returns the current state and a dispatch method.

    [1] - first: make reducer function contian switch statement that have all function
      -- it have two argument => state , action
    
    [2] - second: declare a varialble:
      const [state, dispatch] = useReducer(reducer func, data || object);
        state => to get data
        dispatch => for use action
      
    [3] - third: use dispatch and state in elements:
      <button onClick={() => dispatch({type: 'remove', id: item.id})}>remove</button>
      dispatch contains action object that can be used => type, id, payload

    notes:
    -- for change item in obj => {...state, item: state.item}
    -- for change item in array => use map : state.map((e) code)
    -- payload: e.target.value

    --its like function that contain all function for one component
*/


const cart = [
  {id: 1, product: "book", count: 5, price: 20},
  {id: 2, product: "pen", count: 8, price: 10},
  {id: 3, product: "pencil", count: 7, price: 6},
  {id: 4, product: "papers", count: 7, price: 10},
  {id: 5, product: "note-book", count: 7, price: 4},
  {id: 6, product: "bag", count: 2, price: 60}
]

function Reducer(){

  const reducer = (state, action) => {
    switch (action.type){

      case 'add':
        return state.map((ele) => {
          if (ele.id === action.id){
            ele.count = ele.count + 1;
          }
          return ele;
        })

      case 'remove':
        return state.filter((ele) => action.id !== ele.id);

      case 'delete':
        return state.map((ele) => {
          if (ele.id === action.id && ele.count !== 0){
            ele.count = ele.count - 1;
          }
          return ele;
        })

      case 'removeAll':
        return [];

      case 'night-mode':
        return [{...state, night: !state.night}];
      
      default:
        return "nothing match"
    }
  };
  const [state, dispatch] = useReducer(reducer, cart);

  const reducer2 = (page, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
      case 'night-mode':
        return {...page, night: !page.night}; 
    }
  };
  const [page, dispatch2] = useReducer(reducer2, {night: false});

  
  return(

    <div style={{backgroundColor: page.night? "black": "white"}}>
      <h1>UseReduser:</h1>
      {state.map((item) => 
        <div className="product" key={item.product}>
          <h3>{item.product}</h3>
          <p className='price'>pricet: {item.price}</p>
          <p className='count'>count: {item.count}</p>
          <button onClick={() => dispatch({type: 'remove', id: item.id})}>remove</button>
          <button onClick={() => dispatch({type: 'add', id: item.id})}>add</button>
          <button onClick={() => dispatch({type: 'delete', id: item.id})}>delete</button>
        </div>
      )}
      <button onClick={() => dispatch({type: 'removeAll'})}>delete all</button>
      <button onClick={() => dispatch2({type: 'night-mode'})}>Nigth Mode</button>
    </div>
  )
}
export default Reducer;