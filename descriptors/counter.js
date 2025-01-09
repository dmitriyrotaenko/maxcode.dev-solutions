// Задача https://maxcode.dev/problems/counter/

function createCounter() {
	let value = 0;
	return Object.defineProperty({}, 'count', {
		get() {
			return value++;
		}
	});
}

const counter = createCounter();

console.log(counter.count)
console.log(counter.count)
console.log(counter.count)
console.log(counter.count)
console.log(counter.count)
console.log(counter.count) // 5 