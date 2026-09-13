import React from "react";

function Object_Literals() {

  let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
  };

  console.log(obj);

  return (
    <div>
      <h2>Object Literal</h2>
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
}

export default Object_Literals;