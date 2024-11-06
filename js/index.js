// console.log(a);

// var a = 2;
// var a = 3;

// console.log(f1);
// console.log(f2);

// function f1(a, b) {
// 	console.log(a, b);
// }

// var f2 = (a, b) => {
// 	console.log(a, b);
// };

// function f1() {
// 	let a = 2;
// 	console.log(a);
// 	function f2() {
// 		console.log(a);
// 	}
// 	f2();
// }

// f1();

let a = 2;
function f1() {
	var a = 0;
}
// console.log(b);
// console.log(c);

console.log(typeof f1);

// function call

function f2(a, cb) {
	console.log(cb(a));
}

// Call back
function square(a) {
	return a * a;
}

f2(square(2), square);
f2(square(2), function (a) {
	return a * a;
}); // Function call, call back
f2(square(2), (a) => a * a);
// f2(4, square);
// square(4); // 16
// log 16
console.log(square);

const f4 = () => 2 * 2;
const f5 = () => {
	return 2 * 2;
};

console.log(f4(), f5());

const obj = {
	name: "Sourav",
};

console.log(obj.name);

const key = "name";

const obj2 = {};

// which one is right
obj2.key = "Sourav";
obj2[key] = "Sourav";
console.log(obj2);
