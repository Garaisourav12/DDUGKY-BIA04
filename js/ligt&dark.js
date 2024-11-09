const outerDiv = document.getElementById("outer-div");
const modeSwitcher = document.getElementById("mode-switcher");

console.log(outerDiv, modeSwitcher);

outerDiv.classList.add("dark");
outerDiv.classList.remove("dark");

console.log(outerDiv.classList);

// modeSwitcher.addEventListener("mouseenter", () => {
// 	console.log("clicked");
// 	outerDiv.classList.add("dark");
// }); //event name, callback function

// modeSwitcher.addEventListener("mouseleave", () => {
// 	console.log("clicked");
// 	outerDiv.classList.remove("dark");
// });

modeSwitcher.addEventListener("click", (event) => {
	console.log("clicked");
	// console.log(event.target);
	console.log(event);
});
