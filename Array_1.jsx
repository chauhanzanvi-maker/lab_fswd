import React from "react";

function Array_1() {

  // Creating an Empty Array
  let a = [];
  console.log(a);

  // Creating an Array and Initializing with Values
  let b = [10, 20, 30];
  console.log(b);

  return (
    <div>
      <h2>Create Array Using Literal</h2>

      <p>Empty Array: {JSON.stringify(a)}</p>
      <p>Array with Values: {JSON.stringify(b)}</p>
    </div>
  );
}

export default Array_1;