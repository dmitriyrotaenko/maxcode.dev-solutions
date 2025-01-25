Function.prototype.call2 = function(thisArg, ...args) {
	const context = Object(thisArg);
	context[this] = this;
	const callResult = context[this](...args);
	delete context[this];

	return callResult;
}

function f(a, b) {
  return this.x + a + b;
}

const obj = { x: 100 };

console.log(f.call2(obj, 20, 3))


// [].every.call2("12345", (x) => x >= '0' && x <= '9')

