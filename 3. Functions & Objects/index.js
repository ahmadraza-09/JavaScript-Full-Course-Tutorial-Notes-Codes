// FUNCTIONS

// Normal Function

function name(params) {}

function greet() {
  console.log("Hello");
}

function greet(name) {
  console.log("Hello", name);
}

// Arrow Function - ES6

const name = (params) => {};

const greet = () => {
  console.log("Hello");
}

function greet = (name) => {
  console.log("Hello", name);
}

// OBJECTS

let person = {
    firstName : 'John',
    lastName  : 'Doe',
    age       : 50,
}

// How to access the value of the object

const person1 = {
  name: "John",
  address: {
    city: "New York",
    country: "USA"
  }
};
console.log(person.address.city); // Outputs: New York

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("Car is starting");
  }
};
console.log(car.start()); // Outputs: Car is starting


