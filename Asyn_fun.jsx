import React from "react";

function Async() {

  async function message() {
    return "Hello from Async Function";
  }

  message().then((result) => {
    console.log(result);
  });

  return (
    <div>
      <h2>Async Function</h2>
      <p>Check Console</p>
    </div>
  );
}

export default Async;