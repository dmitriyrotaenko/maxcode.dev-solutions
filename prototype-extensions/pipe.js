Function.prototype.pipe = function(fn) {
  return arg => {
    return [this, fn].reduceRight((res, fn) => fn(res), arg);
  }
};

const double = x => x * 2;
const cube = x => x ** 3;
const inc = x => x + 1;

const foo2 = inc.pipe(cube).pipe(double);
console.log(foo2(2)); // 54
