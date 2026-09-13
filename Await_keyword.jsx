function Await_keyword() {

  async function showMessage() {
    let result = await Promise.resolve("Hello React");
    console.log(result);
  }

  showMessage();

  return (
    <div>
      <h2>Await Keyword</h2>
      <p>Check Console</p>
    </div>
  );
}

export default Await_keyword;