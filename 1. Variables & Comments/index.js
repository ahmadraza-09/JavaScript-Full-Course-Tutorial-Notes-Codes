//What is Comments in JavaScript ?

// Single Line Comment
let myName = Rahul; // This code defines myName

/* Multi Line Comment */

/* 
const myAge = () => {
    const myAge = 19;
    console.log(myAge);
}
myAge(); 
*/

// VAR
var name = "Mohan";
console.log(name); // Output: Mohan

var name = "Arman"; // Re-Declared
console.log(name); // Output: Arman

name = "Yash"; // Asigned New Value
console.log(name); // Output: Yash

// function or Global-Scoped Variable
function name() {
  if (true) {
    var age = 21;
    console.log(age); // Output: 21
  }
  console.log(age); // Output: 21
  // Can be accessed anywhere
}
name();

// LET
let name = "Mohan";
console.log(name); // Output: Mohan

name = "Yash"; // Asigned New Value
console.log(name); // Output: Yash

let name = "Arman"; // Re-Declared
console.log(name); // Output: error - name is already defined

// Block-Scoped Variable 
function name() {
  if (true) {
    let age = 21;
    console.log(age); // Output: 21
  }
  console.log(age); // Output: error - age is not defined
  // Can be accessed under scope {}
}
name();


// CONST
const name = "Mohan";
console.log(name); // Output: Mohan

name = "Yash"; // Asigned New Value
console.log(name); // Output: error - Assignment to constant variable.

const name2; // error - Missing initializer in const declaration

const name = "Arman"; // Re-Declared
console.log(name); // Output: error - Identifier 'name' has already been declared

// Block-Scoped
function name() {
  if (true) {
    const age = 21;
    console.log(age); // Output: 21
  }
  console.log(age); // Output: error - age is not defined
  // Can be accessed under scope {}
}
name();
