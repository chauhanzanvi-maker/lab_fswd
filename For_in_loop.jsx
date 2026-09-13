function For_in_loop() {
  let student = {
    name: "Zanvi",
    age: 18,
    course: "BSc IT"
  };

  return (
    <div>
      <h2>For In Loop</h2>

      {Object.keys(student).map((key) => (
        <p key={key}>
          {key}: {student[key]}
        </p>
      ))}
    </div>
  );
}

export default For_in_loop;