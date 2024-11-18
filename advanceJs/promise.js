// const p1 = new Promise((resolve, reject) => {
// 	const success = true;

// 	setTimeout(() => {
// 		console.log("Inside promise");
// 		if (success) {
// 			resolve([1, 2, 3]);
// 		} else {
// 			reject("This is error message");
// 		}
// 	}, 3000);
// });

// console.log(p1);

// p1.then((x) => {
// 	console.log(x);
// 	const p2 = new Promise((resolve, reject) => {
// 		resolve("api 2");
// 	});
// 	p2.then((x) => {
// 		console.log(x);

// 	}).catch((e) => {
// 		console.log(e);
// 	});
// }).catch((e) => {
// 	console.log(e);
// });

// p1.then((x) => {
// 	console.log(x);
// 	return new Promise((resolve, reject) => {
// 		resolve("api 2");
// 		// reject("error in api 2");
// 	});
// })
// 	.then((x) => {
// 		console.log(x);
// 		return new Promise((resolve, reject) => {
// 			// resolve("api 3");
// 			reject("Error in api 3");
// 		});
// 	})
// 	.then((x) => {
// 		console.log(x);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// console.log("hi");

// console.log(p2);

function getPromise(success, num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (success) {
				resolve(`data ${num}`);
			} else {
				reject(`error ${num}`);
			}
		}, 2000);
	});
}

getPromise(true, 1)
	.then((x) => {
		console.log(x);
		return getPromise(true, 2);
	})
	.then((x) => {
		console.log(x);
		return getPromise(true, 3);
	})
	.then((x) => {
		console.log(x);
		return getPromise(true, 4);
	})
	.then((x) => {
		console.log(x);
	})
	.catch((e) => {
		console.log(e);
	});
