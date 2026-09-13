import React from "react";

function Recursive() {
  const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  return (
    <div>
      <h2>Recursive Function</h2>
      <p>Factorial of 5: {factorial(5)}</p>
    </div>
  );
}

export default Recursive;