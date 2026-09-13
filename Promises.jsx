function Promises() {

  let promise = new Promise((resolve) => {
    resolve("Promise Completed");
  });

  promise.then((result) => {
    console.log(result);
  });

  return (
    <div>
      <h2>Promise</h2>
      <p>Check Console</p>
    </div>
  );
}

export default Promises;