class BrowserHistory {
	constructor(url) {
		this.initialURL = url;
		this.history = [this.initialURL];
		this.urlPointer = 0;

		this.wasBacked = false;
	}

	visit(url) {
		if(this.wasBacked) {
			this.history = this.history.slice(0, this.urlPointer + 1);
			this.wasBacked = false;
		}

		this.history.push(url);
		this.urlPointer++;

		return url;
	}

	back() {
		if(this.urlPointer === 0) {
			return null;
		}

		this.wasBacked = true;

		this.urlPointer--;
		return this.history[this.urlPointer];
	}

	forward() {
		if(this.urlPointer === this.history.length - 1) {
			return null;
		}

		this.urlPointer++;
		return this.history[this.urlPointer];
	}
}

const history = new BrowserHistory("A");

// visit B; visit C; visit D; back; back; visit E, visit F; back; back

history.visit('B') // 1
history.visit('C') // 2
history.visit('D') // 3

history.back() // 'C'
console.log(history.back()) // 'B'

history.visit('E')
history.visit('F')
console.log(history.history)

history.back()
console.log(history.back());