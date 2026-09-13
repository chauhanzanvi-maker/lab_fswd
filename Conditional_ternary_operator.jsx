function Conditional_ternary_operator() {
  let age = 20;

  return (
    <div>
      <h2>Ternary Operator</h2>

      <p>{age >= 18 ? "Adult" : "Minor"}</p>
    </div>
  );
}

export default Conditional_ternary_operator;