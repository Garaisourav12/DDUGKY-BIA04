class Student {
	constructor(name, age, rollNo) {
		console.log("Constructor called");
		this.name = name;
		this.age = age;
		this.rollNo = rollNo;
	}

	display() {
		console.log(this.name, this.age, this.rollNo);
	}
}

const s1 = new Student("Sourav", 22, 1);
console.log(s1.name);
s1.display();

console.log(this);
console.log(window);
