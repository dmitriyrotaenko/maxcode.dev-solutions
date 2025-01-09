// Задача https://maxcode.dev/problems/object-assign-advanced/

function objectAssign(target, ...sources) {
	sources.forEach(source => {
		for(const prop in source) {
			const descriptor = Object.getOwnPropertyDescriptor(source, prop);
			Object.defineProperty(target, prop, descriptor);
		}
	})

	return target;
}

const obj = {
  x: 1,
  y: 2,
};

const obj2 = {
  get doubleX() {
    return this.x * 2;
  },
  set incY(increment) {
    this.y += increment;
  },
};

objectAssign(obj, obj2);

console.log(obj); // { x: 1, y: 2 }
console.log(obj.doubleX); // 2
obj.incY = 5;
console.log(obj.y); // 7

