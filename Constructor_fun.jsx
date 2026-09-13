import React from "react";

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function Constructor() {
  const student = new Student("Zanvi", 20);

  return (
    <div>
      <h2>Constructor Function</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}

export default Constructor;