function NestedIfElse() {
  let marks = 75;
  let result;

  if (marks >= 50) {
    if (marks >= 70) {
      result = "Distinction";
    } else {
      result = "Pass";
    }
  } else {
    result = "Fail";
  }

  return (
    <div>
      <h2>Nested If Else</h2>
      <p>{result}</p>
    </div>
  );
}

export default NestedIfElse;