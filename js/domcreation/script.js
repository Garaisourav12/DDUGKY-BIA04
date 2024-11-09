const parent = document.getElementById("div");

// create html element
const newElement = document.createElement("div");

// Adding text to the element
newElement.innerText = "New item";

// Adding elemnt to its parent
parent.appendChild(newElement);

console.log(newElement);

// Input
const input = document.getElementById("input");

input.value = "Sourav";

input.value = input.value.toUpperCase();
