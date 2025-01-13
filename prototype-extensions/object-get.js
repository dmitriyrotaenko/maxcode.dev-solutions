Object.prototype.get = function(keyChain) {
	return keyChain.split('.').reduce((currObj, key) => currObj?.[key], this);
}

const obj = {
  b: {
    x: 1,
  },
  a: {
    m: {
      n: {
        y: 8,
      },
    },
  },
};

console.log(obj.get("b"));   // { x: 1 }
console.log(obj.get("b.x")); // 1
console.log(obj.get("b.m")); // undefined
console.log(obj.get("b.q.w.e")); // undefined
