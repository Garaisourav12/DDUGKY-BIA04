// Element select
const btn = document.getElementById("btn");

// add event listener to this button
btn.addEventListener("click", function () {
	console.log("clicked");
}); // event name, callback function

// Element select
const btn2 = document.getElementById("btn2");

function handleClick() {
	console.log("clicked on btn 2");
}
// add event listener to this button
btn2.addEventListener("click", handleClick); // event name, callback function

// Prevent Default
const myForm = document.getElementById("myform");

myForm.addEventListener("submit", (event) => {
	// This method will prevent the default behaviour of the event
	event.preventDefault();
	console.log("form submitted");
});
