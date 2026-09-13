function Object_literals_constructor() {

  let student = {
    name: "Zanvi",
    age: 18,
    course: "BSc IT"
  };

  return (
    <div>
      <h2>Object Literal</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default Object_literals_constructor;