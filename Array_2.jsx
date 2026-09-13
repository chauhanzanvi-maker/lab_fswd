import React from "react";

function Array_2() {

  // Creating and Initializing an array with values
  let a = new Array(10, 20, 30);

  console.log(a);

  return (
    <div>
      <h2>Create Array Using new Keyword (Constructor)</h2>

      <p>{JSON.stringify(a)}</p>
    </div>
  );
}

export default Array_2;