function Pure_fun() {

  function add(a, b) {
    return a + b;
  }

  return (
    <div>
      <h2>Pure Function</h2>
      <p>Result: {add(10, 20)}</p>
    </div>
  );
}

export default Pure_fun;