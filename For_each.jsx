function For_each() {
  let fruits = ["Apple", "Mango", "Banana"];

  let result = [];

  fruits.forEach((fruit) => {
    result.push(fruit);
  });

  return (
    <div>
      <h2>For Each</h2>

      {result.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}

export default For_each;