function groupBy(iterable, cb) {
  const res = Object.create(null);

  for(const [idx, item] of Object.entries(Array.from(iterable))) {
		const key = String(cb(item, idx));
    res[key] ??= [];
    res[key].push(item);
  }

  return res;
}

console.log(groupBy(
  ["destructor", "constructor", "destructor"],
  x => x,
));




