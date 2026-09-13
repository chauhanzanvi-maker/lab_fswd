function Switch_case() {
  let day = 2;
  let result;

  switch (day) {
    case 1:
      result = "Monday";
      break;

    case 2:
      result = "Tuesday";
      break;

    case 3:
      result = "Wednesday";
      break;

    default:
      result = "Invalid Day";
  }

  return (
    <div>
      <h2>Switch Case</h2>
      <p>{result}</p>
    </div>
  );
}

export default Switch_case;