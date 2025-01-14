Array.prototype.map2 = function(callback, thisArg) {
  const result = Array(this.length);
  let idx = 0;

  for(const item of this) {
    if(idx in this) {
      result[idx] = callback.call(thisArg ?? null, item, idx, this);
    }
    idx++;
  }

  return result;
}

const a = Array(5);
a[2] = 2;

const b = a.map2(x => x * 2);
console.log(0 in b); // false
console.log(b.length); // 5

console.log([1, 2, 3].map2(x => x ** 2));
// [1, 4, 9]

console.log(["a", "b", "c", "d"].map2((x, i) => x.repeat(i)));
// ["", "b", "cc", "ddd"]

const multiplicator = {
  x: 5,
  multiply(num) {
    return num * this.x;    
  },
};

console.log([1, 2, 3].map2(multiplicator.multiply));
// [NaN, NaN, NaN]

console.log([1, 2, 3].map2(multiplicator.multiply, multiplicator));
// [5, 10, 15]

