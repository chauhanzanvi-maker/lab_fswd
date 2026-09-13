function Array_template_literal() {

  let name = "Zanvi";
  let age = 18;

  let students = [
    `Name: ${name}`,
    `Age: ${age}`,
    `Course: BSc IT`
  ];

  return (
    <div>
      <h2>Array Using Template Literals</h2>

      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </div>
  );
}

export default Array_template_literal;