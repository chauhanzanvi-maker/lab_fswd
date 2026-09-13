function Nested_for_loop() {
  let data = [];

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      data.push(`${i} x ${j} = ${i * j}`);
    }
  }

  return (
    <div>
      <h2>Nested For Loop</h2>

      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Nested_for_loop;