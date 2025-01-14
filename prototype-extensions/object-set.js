Object.prototype.set = function(keyChain, value) {
	const keys = keyChain.split('.');
	let currObj = this;
	let idx = 0;

	for(const key of keys) {
		if(idx < keys.length - 1) {
			currObj[key] ??= {};
			currObj = currObj[key];
		} else {
			currObj[key] = value;
		}
		idx++;
	}
}

const obj3 = {
  a: {
    b: {
      x: 1,
    },
  },
};

obj3.set("a.m.n.y", 8);

// obj3 === {
//   b: {
//     x: 1,
//   },
//   a: {
//     m: {
//       n: {
//         y: 8,
//       },
//     },
//   },
// };

console.dir(obj3, {depth: 3})