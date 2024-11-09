const outerDiv = document.getElementById("outer-div");
const innerDiv = document.getElementById("inner-div");
const btn = document.getElementById("btn");

document.body.addEventListener(
	"click",
	(event) => {
		console.log(event.target, event.currentTarget);
		console.log("clicked on body");
	}
	// true
);

outerDiv.addEventListener(
	"click",
	(event) => {
		console.log(event.target, event.currentTarget);
		console.log("clicked on outer div");
	}
	// true
);

innerDiv.addEventListener(
	"click",
	(event) => {
		console.log(event.target, event.currentTarget);
		console.log("clicked on inner div");
		event.stopPropagation();
	}
	// true
);

btn.addEventListener(
	"click",
	(event) => {
		// event.stopPropagation();
		console.log(event.target, event.currentTarget);
		console.log("clicked on btn");
	}
	// true
);
