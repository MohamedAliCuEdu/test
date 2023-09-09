<======> React course <======>
[1] - Project Structure:
in index file:

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './app';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
________________________________________________

rules:
- to write js code in html code => {js code}
- use className insteadof class
- form: for => htmlFor
- style inline  => style = {{object of style}}

- to handle events
-- in html use onEvent => onCick{function only name}
-- use arrow function to rebind this
-- to pass argument use arrow function => onClick={() => shoot("Goal!")}
-- && => true && false => false : true && 5 && 7 => 7

________________________________________________
[2] - components files: [old_syntax]
constructor || class

- to change the state value dont change directly => use setState({prop with changes})
-- steps for change state in function:
  1- clone => let nName = [...this.state.origin]
  2- edit => mak your changes
  3- setState(clone: stateName || the same name)

class Product[name of class] extends Component {
    // state have the data of comp [optional]
    state = { }

    // render the data in ui
    render() { 
        return ();
    }
}
//export files to use it:
export default Product;

you can use props => this.props
________________________________________________
[3] - components files: [new_syntax]

function Car() {
  return (<h2>Hi, I am a Car!</h2>);
}
export default Car;

you can use props => props in ()
________________________________________________
[4] - passing parameter in event:

- when using func in code dont use => () instead white its name as ref
- and for using a parameter use this:
1- func.bind(this, para)
2- in code {() => func(para)}

passing data from comp to other: [props]

- to send data:
-- add data in comp tag as attribute => attr={data}.
-- and htmlElement between open and close tag => as children

in import file:
- props => is object that store the import data => this.props
- you can add importHtmlEle => {this.props.children} in render
________________________________________________
Router:
- Router is group of components can be used:
- comp => [BrowserRouter, Routes, Route, Link, Switch]

-- [index.js] => import { BrowserRouter } from "react-router-dom";
- We wrap our content first with <BrowserRouter>.

-- [app.jsx]:
- import comp of pages:
- <Route path="/name of path || *" component={comp} || element={}>
- The Home component has an [index] attribute => That specifies this as the default
- or => using switch => wrap all route in switch
- or => use exact attr
- Setting the path to * => for any undefined URLs => This is great for a 404 error page.

-- in [nav]:
- import Link
- Link => <Link to="path">name</Link>
________________________________________________
[6] - changeing state:

useStat

userID hook
