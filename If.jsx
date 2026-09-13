function If() {
  let age = 20;

  return (
    <div>
      <h2>If Statement</h2>

      {age >= 18 && <p>You are eligible to vote.</p>}
    </div>
  );
}

export default If;