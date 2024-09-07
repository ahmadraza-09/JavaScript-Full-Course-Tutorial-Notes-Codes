
// OPERATORS

// Arithmetic operators
`+`  ---  `Addition`
`-`  ---  `Subtraction`
`*`  ---  `Multiplication`
`**` ---  `Exponentiation`
`/`  ---  `Division`
`%`  ---  `Modulus (Remainder)`
`++` ---  `Increment`
`--` ---  `Decrement`

// Operations
let a = 4;
let b = 2;
console.log(a + b)  // `+`  ---  `Addition`
console.log(a - b)  // `-`  ---  `Subtraction`
console.log(a * b)  // `*`  ---  `Multiplication`
console.log(a ** b) // `**` ---  `Exponentiation`
console.log(a / b)  // `/`  ---  `Division`
console.log(a % b)  // `%`  ---  `Modulus (Remainder)`
console.log(a++)    // `++` ---  `Increment`
console.log(a--)    // `--` ---  `Decrement`

// Assignment operators
`=`   ---  `Assignment`
`+=`  ---  `Addition Assignment`
`-=`  ---  `Subtraction Assignment`
`*=`  ---  `Multiplication Assignment`
`/=`  ---  `Division Assignment`
`%=`  ---  `Modulus Assignment`
`**=` ---  `Exponentiation Assignment`

// Operations

let d = 0;
let c = 10;           // `=`   ---  `Assignment`
console.log(d += c);  // also as `d = d + c`
console.log(d -= c);  // also as `d = d - c`
console.log(d *= c);  // also as `d = d * c`
console.log(d /= c);  // also as `d = d / c`
console.log(d %= c);  // also as `d = d % c`
console.log(d **= c); // also as `d = d ** c`


// DATA TYPES

// Primitive Data Types
// Primitive data types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed once created.
`String`    ---  "Hello, World!" // Represents a sequence of characters (text).
`Number`    ---  42, 3.14        // Represents both integer and floating-point numbers.
`Boolean`   ---  true, false     // Represents a logical value: true or false.
`Null`      ---  null            // Represents a null value
`Undefined` ---  undefined       // Represents a variable that has been declared but not yet assigned a value.
`BigInt`    ---  BigInt(567890n) // Represents store long integers

// For example
`String`              
const name = "Jhon";

`Number`  
const num = 27;

`Boolean`
console.log(num == 27);

`Null` 
let money = null;

`Undefined`
let number = undefined;

`BigInt` 
let longNum = BigInt(9007199254740992n);

// Why use `BigInt` instead of Number Variable for storing long numbers.
// Ans..

// Becasue JavaScript Number type  based on IEEE 754 standard, which means it uses 64-bit floating-point format and his maximum safe integer value 2^53 - 1 (i.e., 9007199254740991) that means if you wants to store big interger than limit than you may loose your accuracy

let largeNumber = 9007199254740992; // Number type
console.log(largeNumber + 1); // Output may not be accurate

let bigIntNumber = BigInt(9007199254740992);
console.log(bigIntNumber + 1n); // Accurate result with BigInt

// Non-Primitive Data Types
// Non-primitive data types can store collections of values and more complex entities.
`Object`    ---  { name: "John", age: 30 }  // Represents a collection of key-value pairs.
`Array`     ---  [1, 2, 3, 4]               // Represents an ordered list of values (a special type of object).
`Function`  ---  function() { return 42; }  // Represents a block of code designed to perform a particular task.
`Date`      ---  new Date()                 // Represents a single moment in time.

// For example

`Object` 
const person = { name: "John", age: 30 }

`Array`
let mixedArr = [1,2,"John",3,true,null,undefined]

`Function`
function person() { return "John" } 

`Date`
const date = new Date(); 