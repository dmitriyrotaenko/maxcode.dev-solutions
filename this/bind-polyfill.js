Function.prototype.bind2 = function(thisArg, ...params) {
  return (...params2) => this.call(thisArg, ...params, ...params2);
};  

function f(a, b, c) {
  return this.x + a + b + c;
}

const obj = { x: 1 };
const foo = f.bind2(obj, 10, 100);

console.log(foo(2000)); // 2111
console.log(foo(3000)); // 3111
