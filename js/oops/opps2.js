class Person {
	name;
	constructor(name) {
		this.name = name;
	}

	walk() {
		console.log(this.name, "Walking");
	}

	speak() {
		console.log(this.name, "Speaking");
	}
}

// Create instance first
const p1 = new Person("Shubham");
p1.walk();
const p2 = new Person("Deepak");
p2.speak();

class Singer extends Person {
	instrument;
	constructor(name, instrument) {
		super(name);
		this.instrument = instrument;
	}

	sing() {
		console.log(this.name, "singing");
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
		console.log(this.name, "walking very fast");
	}
}

const r1 = new Racer("Arun Sir");

r1.walk();
r1.speak();
