function Student(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

function Props() {
  return (
    <div>
      <h2>Props Example</h2>

      <Student name="Zanvi" age="18" />
    </div>
  );
}

export default Props;