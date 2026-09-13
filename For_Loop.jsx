function For_Loop() {
  let numbers = [];

  for (let i = 1; i <= 5; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <h2>For Loop</h2>

      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}
    </div>
  );
}

export default For_Loop;