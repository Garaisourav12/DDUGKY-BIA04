const textBox = document.getElementById("text-box");

const uppercaseButton = document.getElementById("uppercase");
const lowercaseButton = document.getElementById("lowercase");
const capitalizeButton = document.getElementById("capitalize");
const sentencecaseButton = document.getElementById("sentencecase");
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const trimButton = document.getElementById("trim");
const extraSpaceButton = document.getElementById("extra-space");

// Uppercase
uppercaseButton.addEventListener("click", () => {
	textBox.value = textBox.value.toUpperCase();
});

// Lowercase
lowercaseButton.addEventListener("click", () => {
	textBox.value = textBox.value.toLowerCase();
});

// Capitalize
capitalizeButton.addEventListener("click", () => {
	textBox.value = textBox.value
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.substring(1);
		})
		.join(" ");
});

// Sentencecase
sentencecaseButton.addEventListener("click", () => {
	textBox.value = textBox.value
		.split(". ")
		.map((sentence) => {
			return sentence.charAt(0).toUpperCase() + sentence.substring(1);
		})
		.join(". ");
});

// Bold
boldButton.addEventListener("click", () => {
	textBox.style.fontWeight =
		textBox.style.fontWeight === "bold" ? "normal" : "bold";
});

// Italic
italicButton.addEventListener("click", () => {
	textBox.style.fontStyle =
		textBox.style.fontStyle === "italic" ? "normal" : "italic";
});

// Trim
trimButton.addEventListener("click", () => {
	textBox.value = textBox.value.trim();
});

// Remove Extra Space
extraSpaceButton.addEventListener("click", () => {
	textBox.value = textBox.value.replace(/\s+/g, " ").trim();
});
