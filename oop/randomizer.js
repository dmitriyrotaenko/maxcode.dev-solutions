class Randomizer {
  constructor(start, end) {
		if(!this._isInputValid(start, end)) throw new Error('validation error');

		this.start = start;
		
		this.range = [];
		

		if(end === undefined) {

		}
		
  }

	next() {
		const numToReturn = this.range[this.currIdx++];
		if(Number.isInteger(numToReturn)) {
			return numToReturn;
		}

		throw new Error('Range finished');
	}

	_isInputValid(...params) {
		if(
			params.length > 0 &&
			params.length <= 2 &&
			params.every(Number.isInteger)
		) return true;

		return false;
	}
}
const r = new Randomizer(2, 4);

console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())


