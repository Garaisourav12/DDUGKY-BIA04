// let timeOut = setTimeout(() => {
// 	console.log("Inside setTimeout");
// }, 5000);

// let interval = setInterval(() => {
// 	console.log("Inside setInterval");
// }, 3000);

// console.log(timeOut, interval);

// console.log("Inside setTimeout");
// console.log("Inside setInterval");

// let timeOut2 = setTimeout(() => {
// 	console.log("Inside setTimeout");
// }, 5000);

// let interval2 = setInterval(() => {
// 	console.log("Inside setInterval");
// }, 5000);

// console.log(timeOut2, interval2);

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
// 	// clearInterval(interval);
// 	clearTimeout(timeOut);
// });

// Callback hell
setTimeout(() => {
	console.log("Task 1");
	setTimeout(() => {
		console.log("Task 2");
		setTimeout(() => {
			console.log("Task 3");
			setTimeout(() => {
				console.log("Task 4");
				setTimeout(() => {
					console.log("Task 5");
				}, 3000);
			}, 3000);
		}, 3000);
	}, 3000);
}, 5000);

// Prototype and proto
let arr = [];
Array.prototype.myFunc = () => {};
console.log(arr.__proto__);
console.log(Array.prototype);

let obj = {};
Object.prototype.myObjFunc = () => {};
console.log(obj.__proto__);
console.log(Object.prototype);
