function While_loop() {
  let i = 1;
  let numbers = [];

  while (i <= 5) {
    numbers.push(i);
    i++;
  }

  return (
    <div>
      <h2>While Loop</h2>

      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}
    </div>
  );
}

export default While_loop;