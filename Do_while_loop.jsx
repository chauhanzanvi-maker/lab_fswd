function Do_while_loop() {
  let i = 1;
  let numbers = [];

  do {
    numbers.push(i);
    i++;
  } while (i <= 5);

  return (
    <div>
      <h2>Do While Loop</h2>

      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}
    </div>
  );
}

export default Do_while_loop;