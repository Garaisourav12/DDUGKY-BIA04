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

console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

function fetchApi() {
	loading.style.display = "flex";
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
			setTimeout(() => {
				loading.style.display = "none";
			}, 2000);
		});
}

async function fetchApi2() {
	try {
		loading.style.display = "flex";
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();

		data.forEach((item) => {
			const li = document.createElement("li");
			li.innerText = item.title;
			dataList.appendChild(li);
			return item.title;
		});
	} catch (error) {
		console.log(error);
	} finally {
		setTimeout(() => {
			loading.style.display = "none";
		}, 2000);
	}

	return 2;
}

// fetchApi();
const p = fetchApi2();
console.log(p);
console.log(d);

let a = 0;
console.log(a);
function f1() {
	a = 2;
}
f1();
console.log(a);
