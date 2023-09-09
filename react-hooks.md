|| React-Hooks:

[] - useState:
  - The React useState Hook allows us to track state in a function component.
  - State generally refers to data or properties that need to be tracking in an application.

  Syntax:
    - const [name, setName] = setName(value);
    - setName => for change data.

  Objects & Array:
    - object property changing by => { ...previousState, color: "blue" }
    - arrays changing by => methods like (filter, map,...);

    - see useReducer:
_______________________________________________
[] - useReducer:

    - The reducer function contains:
      -- your custom state logic and the initialStatecan be a simple value but generally will contain an object.
      -- The useReducer Hook returns the current state and a dispatch method.

    [1] - first: make reducer function contian switch statement that have all function
        -- it have two argument => state , action
    
    [2] - second: declare a varialble:
      const [state, dispatch] = useReducer(reducer func, data || object);
        state => to get data
        dispatch => for use action use parameter
      
    [3] - third: use dispatch and state in elements:
      <button onClick={() => dispatch({type: 'remove', id: item.id})}>remove</button>
      dispatch contains action object that can be used => type, id, payload

    notes:
    -- for change item in obj => {...state, item: state.item}
    -- for change item in array => use map : state.map((e) code)
    -- payload: e.target.value

    --its like function that contain all function for one component
_______________________________________________
[] - useMemo - memo - usCallBack:

  - memo => its use to prevent comp rendring when other comp render:

    - it used to memorize the func => so it doesnt re-render when any thing chane
    - and its change only from dependencies

    Syntax:
    const func = useCallBack(() => {}, [dependencies]);

    || deffirence between useCallBack and useMemo:
      - useCallBack: memorize (the operation).
      - useMemo: memorize (the result "return" of func).
_______________________________________________
[] - useRef:

    - it used for storing and selecting html dom:
      -- make var => ele = useRef();
      -- put it as a value of (ref) attribute
      -- use ele.current.(the property of html ele)
_______________________________________________
[] - useEffect:
    - The useEffect Hook allows you to perform side effects in your components.
    - Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    - useEffect accepts two arguments. The second argument is optional.

    - useEffect(<function>, <dependency>)
      -- dependency > empty: work evry render, []: only on start, [data]: only data changes

    - include return to clearInterval:
      -- after using useRef use this return and call clear in btn
_______________________________________________
[] - using (useLayoutEffect):
    -it make dom change before data change:

    The only time you should be using useLayoutEffect is to measure DOM nodes for things like animations.
    In the example, I measure the textarea after every time you click on it (the onClick is to force a re-render.)
    This means you're running render twice but it's also necessary to be able to capture the correct measurments.
_______________________________________________
[] - later:

  useContext, useId, custom Hooks
_______________________________________________
[] -
_______________________________________________
[] -
[] -
[ -]