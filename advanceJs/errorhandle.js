try {
	// loder start
	console.log("Code before error");

	// api call
	obj = {};
	console.log(obj.a.b);

	// api res show in dom
	console.log("Code after error");
} catch (error) {
	// It will run only when error will come
	console.log(error.message);
	// Set fallback ui
} finally {
	// It always run if error come or not
	console.log("Must be executed");
	// loader off
}

const dataElement = document.getElementById("data");
const loader = document.getElementById("loading");
const fallback = document.getElementById("error");

async function fetchApi() {
	const p1 = new Promise((res, rej) => {
		const error = false;
		setTimeout(() => {
			if (error) {
				rej();
			} else {
				res("Api data");
			}
		}, 5000);
	});

	try {
		loader.style.display = "block";
		const data = await p1;
		dataElement.innerText = data;
	} catch (error) {
		fallback.style.display = "block";
	} finally {
		loader.style.display = "none";
	}
}

fetchApi();
