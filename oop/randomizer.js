// Условие и примеры https://maxcode.dev/problems/randomizer/
class Randomizer {
  constructor(...range) {
		if(!this._isInputValid(...range)) throw new Error('validation error');

		const [start, end] = range;
		this.start = end === undefined ? 0 : start;
		this.end = end === undefined ? start : end;
		this.range = Array.from({length: this.end - this.start + 1}, (_, i) => this.start + i);
		this.generatedNumbers = new Set();
  }

	next() {
		if(this.generatedNumbers.size === this.range.length) {
			throw new Error('range finished');
		}

    let randomNum = this.pickRandomNum();
    while(this.generatedNumbers.has(randomNum)) {
      randomNum = this.pickRandomNum();
    }

    this.generatedNumbers.add(randomNum);
    return randomNum;
	}

	pickRandomNum() {
		return Math.floor(Math.random() * (this.end - this.start + 1) + this.start);
	}

	_isInputValid(...range) {
		if(
			range.length >= 1 && 
			range.length <= 2 &&
			this._isStartLessThanEnd(...range) &&
			range.every(Number.isInteger)
		) return true;

		return false;
	}

	_isStartLessThanEnd(start, end) {
		if(end) {
			return start <= end;
		}

		return true;
	}
}
