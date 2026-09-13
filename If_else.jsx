function If_else() {
  let age = 16;

  let result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";

  return (
    <div>
      <h2>If Else</h2>
      <p>{result}</p>
    </div>
  );
}

export default If_else;