function Non_Primitive() {
  let fruits = ["Apple", "Mango", "Banana"];

  let student = {
    name: "Zanvi",
    age: 18
  };

  return (
    <div>
      <h2>Non-Primitive Datatypes</h2>

      <p>{fruits[0]}</p>
      <p>{fruits[1]}</p>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}

export default Non_Primitive;