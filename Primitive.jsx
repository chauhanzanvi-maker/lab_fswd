function Primitive() {
  let name = "Zanvi";       // String
  let age = 18;             // Number
  let isStudent = true;     // Boolean
  let x;                    // Undefined
  let y = null;             // Null

  return (
    <div>
      <h2>Primitive Datatypes</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent.toString()}</p>
      <p>Undefined: {x}</p>
      <p>Null: {y}</p>
    </div>
  );
}

export default Primitive;