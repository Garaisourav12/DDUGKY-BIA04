const obj = {
	name: "Sourav",
	age: 24,
};
const json = JSON.stringify(obj);
console.log(typeof obj);
console.log(typeof json);
console.log(JSON.parse(json));

let d = 1;

// console.log();
const loading = document.getElementById("loading");
const dataList = document.getElementById("dataList");

loading.style.display = "block";
console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

fetch("https://jsonplaceholder.typicode.com/posts")
	.then((res) => {
		// console.log(res.json());
		// console.log(res.json());

		return res.json();
	})
	.then((data) => {
		data.forEach((item) => {
			const li = document.createElement("li");
			li.innerText = item.title;
			dataList.appendChild(li);
			return item.title;
		});
		console.log(data);

		// console.log(titleArray);
	})
	.catch((e) => {
		console.log(e);
	})
	.finally(() => {
		loading.style.display = "none";
	});

console.log(d);

let a = 0;
console.log(a);
function f1() {
	a = 2;
}
f1();
console.log(a);
