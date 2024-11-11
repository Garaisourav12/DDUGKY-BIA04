const box = document.getElementById("box");

const box1 = document.querySelector("#box");

const box2 = document.querySelector("div");

const box3 = document.getElementsByTagName("div");

const box4 = document.getElementsByClassName("box");
console.log(box4);

const para = document.querySelector(".box");
console.log(para);

console.log(para.innerText);
console.log(para.textContent);

// Create
const newBox = document.createElement("div"); // tag name
document.body.append(newBox);
// Adding id
newBox.id = "new-box";

// Adding class
newBox.classList.add("box", "box-1");
newBox.classList.add("class-1");
// newBox.classList = "box class-1";
// newBox.classList = "box-1";

// Adding text
newBox.innerText = para.innerText;
newBox.innerText = para.textContent;

// Adding Style
newBox.style.backgroundColor = "yellow";
// element.style.<Property in Camel Case> = Value

// Standered/Inbuilt Attribute
// element.attributeName = Value

// Custom Attribute
// element.setAttribute("attributeName", "Value")
console.log(newBox);

const input = document.createElement("input");
input.type = "text";
console.log(input);

const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
	console.log(e);

	console.log("Mouse enter");
}); // event name // function - callback
