// Условие и примеры https://maxcode.dev/problems/tuple/

function Tuple(...items) {
	if(new.target === undefined) {
		return new Tuple(...items);
	}

	this.items = items;
}

Tuple.prototype.equals = function(otherInstance) {
	if(!(otherInstance instanceof Tuple)) {
		return false;
	}

	if(otherInstance.items.length !== this.items.length) {
		return false;
	}

	if(!otherInstance.items.every(item => this.items.includes(item))) {
		return false;
	}

	return true;
}

const colors1 = Tuple("red", "yellow", "green");
const colors2 = Tuple("red", "yellow", "green");
const colors3 = Tuple("red", "green", "blue");

console.log(colors1.equals(colors2));     // true
console.log(colors1.equals(colors3));     // false
console.log(colors1.equals("xxx"));       // false
console.log(colors1 instanceof Tuple);    // true


