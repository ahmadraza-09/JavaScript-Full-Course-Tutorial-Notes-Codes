// EVENTS

"onchange"      ---  "Triggered when an element value changed."
"onclick"       ---  "Triggered when an element is clicked."
"onmouseover"	---  "Triggered when the mouse pointer moves over an element."
"onmouseout"	---  "Triggered when the mouse pointer moves out an element."
"onkeydown"	    ---  "Triggered when a key is Pressed."
"onload"	    ---  "Triggered when the web page or an image is completely loaded."


"onchange" 

input.addEventListener("change", (e) => {
  alert("Input changed to: " + e.target.value);
});

"onclick"  

const clickMe = () => {
  alert("You clicked me.");
};

"onmouseover"
button.addEventListener("mouseover", () => {
  alert("You are hovering on button");
});

"onmouseout"
button.addEventListener("mouseout", () => {
  alert("You are MouseOut on button");
});

"onkeydown"	

input.addEventListener("keydown", (e) => {
  alert("Input changed to: " + e.target.value);
});

"onload"

window.addEventListener("load", () => {
  alert("The page has fully loaded!");
});

// STRING

const greeting = "Hello, World!";
console.log(greeting); 

const person = 'john';
console.log(person);



// String Methods

"length"                      --- "Returns the length of the string."
"toUpperCase()"               --- "Converts the string to uppercase."
"toLowerCase()"               --- "Converts the string to lowercase."
"replace(oldValue, newValue)" --- "Replaces a specified value with another value in the string."
"trim()"                      --- "Removes whitespace from both ends of a string."
"slice(start, end)"           --- "extracts a part of a string and returns the extracted part in a new string."
"split('')"                   --- "To change a string to array format"
"indexOf(value)"              --- "To check index of a string value"
"string[index]"               --- "To access the string value"


"length"       
console.log(greeting.length); // 13

"toUpperCase()"              
console.log(greeting.toUpperCase()); 

"toLowerCase()"    
console.log(greeting.toLowerCase()); 

"replace(oldValue, newValue)"
console.log(greeting.replace("World!", "Sir!")); 

"trim()"   
let newGreeting = greeting.trim(); 
console.log(newGreeting);

"slice(start, end)"   
console.log(greeting.slice(0,5))

"split('')"        
let greeting2 = greeting.split(""); 
console.log(greeting2);

"indexOf(value)"    
let index = greeting.indexOf("H");
console.log(index);

"string[index]"              
console.log(greeting[0]);

// Bonus Methods

let personName = "John";
let age = 30;

let greetingPerson = `Hello, my name is ${personName} and I am ${age} years old.`;
console.log(greetingPerson);
