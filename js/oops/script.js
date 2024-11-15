class ClassRoom {
	constructor(name, desk, student) {
		this.whiteBoard = 1;
		this.desk = desk;
		this.student = student;
		this.name = name;
	}

	study() {
		console.log("Studing in " + this.name);
	}
}

let bia4ClassRoom = new ClassRoom("BIA-4", 30, 20);
console.log(ClassRoom);
bia4ClassRoom.study();

class Canteen {
	constructor(cook, oven, cylinder) {
		this.cook = cook;
		this.oven = oven;
		this.cylinder = cylinder;
	}
	getDetails() {
		console.log(
			`Our canteen have ${this.cook} cook, ${this.oven} oven, ${this.cylinder} cylinder`
		);
	}
	cooking(food) {
		console.log("Cooking " + food);
	}
}

const dduCanteen = new Canteen(2, 2, 4);
console.log(dduCanteen);
// Canteen.cooking();
dduCanteen.cooking("Chole");
dduCanteen.getDetails();

dduCanteen.cylinder = 3;
dduCanteen.getDetails();

class FiveStarCanteen extends Canteen {
	parcel(food) {
		console.log("Parcel " + food);
	}
}
let fsCanteen = new FiveStarCanteen(2, 3, 5);
console.log(fsCanteen);
fsCanteen.cooking("Dosa");
fsCanteen.getDetails();
