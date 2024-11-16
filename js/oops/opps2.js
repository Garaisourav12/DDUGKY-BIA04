class Person {
	#name;
	_age;
	constructor(name, age) {
		this.#name = name;
		this._age = age;
	}

	getName() {
		return this.#name;
	}

	setName(name) {
		this.#name = name;
	}

	walk() {
		console.log(this.#name, "Walking");
	}

	speak() {
		console.log(this.#name, "Speaking");
	}
}

// Create instance first
const p1 = new Person("Shubham", 22);
p1.walk();
const p2 = new Person("Deepak", 23);
p2.speak();

class Singer extends Person {
	instrument;
	constructor(name, age, instrument) {
		super(name, age);
		this.instrument = instrument;
	}

	sing() {
		console.log(this.getName(), "singing");
	}

	tellAge() {
		console.log("age of", this.getName(), "is", this._age);
	}
}

const s1 = new Singer("Anish", "Gitur");

console.log(s1);

s1.walk();
s1.speak();
s1.sing();

console.log(s1 instanceof Person);

// Polymorphism
class Racer extends Person {
	walk() {
		console.log(this.getName(), "walking very fast");
	}
}

const r1 = new Racer("Arun Sir");

r1.walk();
r1.speak();
console.log(s1.instrument);
// s1.#name = "Yogesh";
s1.instrument = "Piyano";
console.log(s1.instrument);
console.log(p1.getName());
p1.setName("Suresh");
console.log(p1.getName());
console.log(p1._age); // Dont access protected property here
