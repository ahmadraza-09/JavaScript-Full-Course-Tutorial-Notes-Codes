// 1. Write a function named multiply that takes two numbers as arguments and returns their product.
// Ans.

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(5, 2));

// 2. Create a function greetUser that takes a user’s name as an argument and prints a greeting message, like "Hello, [name]!"
// Ans.

const greetUser = (name) => {
  return "Hello " + name + "!";
};

console.log(greetUser("John"));

// 3. Create an object dog with properties name and age. Write a method called bark that returns a string like "[name] says woof!"
// Ans.

const dog = {
  name: "Rokey",
  age: 2,
  bark: function () {
    console.log(dog.name, "says woof!");
  },
};

dog.bark();

// 4. Create an object student with properties name, age, and grade. Access and log the name and age of the student.
// Ans.

const student = {
  name: "John",
  age: 4,
  grade: "A+",
};

console.log(student.name);
console.log(student.age);

// 5. Create an object car with properties brand, model, and year. Write a method inside the object called Stop that logs "The [brand] [model] is Stoping."
// Ans.

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
  stop: function () {
    console.log(car.brand + " " + car.model + " is stopping");
  },
};
car.stop();
