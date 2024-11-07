const div1 = document.getElementById("div1");
const modeSwitcher = document.getElementById("mode-swicher");

modeSwitcher.addEventListener("click", () => {
	if (div1.classList.contains("light")) {
		div1.classList.remove("light");
		div1.classList.add("dark");
	} else {
		div1.classList.remove("dark");
		div1.classList.add("light");
	}
});
// console.log(div1);

// div1.class = "box";
// console.log(div1.class);

// Custom Attributes
div1.setAttribute("data-topic_name", "DOM");
div1.setAttribute("data-student_count", 5);
console.log(div1.getAttribute("data-student_count"));

console.log(div1.dataset);

div1.classList.add("box");
div1.classList.remove("class-1");
// div1.class = div1.class + " box";

console.log(div1.classList);
