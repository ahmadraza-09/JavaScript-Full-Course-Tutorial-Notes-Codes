let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("You clicked me.");
});

input.addEventListener("change", (e) => {
  alert("Input changed to: " + e.target.value);
});

input.addEventListener("keyup", (e) => {
  alert("Input changed to: " + e.target.value);
});

button.addEventListener("mouseover", (e) => {
  alert("You are hovering on button " + e.target.value);
});

window.addEventListener("load", () => {
  alert("The page has fully loaded!");
});
