import React from "react";

function Arrow() {
  const add = (a, b) => {
    return a + b;
  };

  return (
    <div>
      <h2>Arrow Function</h2>
      <p>Addition: {add(10, 20)}</p>
    </div>
  );
}

export default Arrow;