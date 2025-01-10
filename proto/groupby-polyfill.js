function groupBy(iterable, cb) {
  const groups = Object.create(null);
	let idx = 0;

  for(const item of iterable) {
		const key = String(cb(item, idx));
    groups[key] ??= [];
    groups[key].push(item);
		idx++;
  }

  return groups;
}

console.log(groupBy(
  ["destructor", "constructor", "destructor"],
  x => x,
));




