import React from "react";
import Card from "../components/card";

const group = [
  { id: 33, name: "ahmed", age: 11 },
  { id: 55, name: "hossam", age: 12 },
  { id: 23, name: "youssef", age: 13 },
  { id: 43, name: "hassan", age: 15 },
  { id: 53, name: "mohamed", age: 20 },
];

function Products() {
  const [arr, setall] = React.useState(group);

  // send function to component
  let ageIncrement = (aim) => {
    // parameter points to id in component file
    setall(
      group.map(
        (
          e // make a new array by map
        ) => (e.id === aim ? { ...e, age: ++e.age } : { ...e, age: e.age }) // to change object => make a copy  bu spread operator
      )
    );
  };

  const deleteName = (aim) => {
    const newg = arr.filter((e) => aim !== e.id);
    setall(newg);
  };

  // let addAl = () => {
  //   let newGroup = [];
  //     group.forEach((e) => {
  //       e = { ...e, age: ++e.age };
  //       newGroup.push(e);
  //     })
  //   setall(newGroup);
  // };
  let addAl = () => {
    setall(
      group.map((e) => {
        return { ...e, age: ++e.age };
      })
    );
  };

  return (
    <>
      <h1>products:</h1>
      <button onClick={addAl}>add</button>
      {arr.map((ele) => (
        <Card
          key={ele.id}
          ele={ele}
          increment={ageIncrement}
          delete={deleteName}
        />
      ))}
    </>
  );
}
export default Products;
