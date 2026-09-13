import React from "react";

function Object_Literals2() {

  let obj = new Object();

  obj.name = "Sourav";
  obj.age = 23;
  obj.job = "Developer";

  console.log(obj);

  return (
    <div>
      <h2>Using new Object Constructor</h2>
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
}

export default Object_Literals2;