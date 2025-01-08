class BrowserHistory {
	constructor(url) {
		this.history = [url];
		this.urlPointer = 0;
	}

	visit(url) {
		this.history = this.history.slice(0, this.urlPointer + 1);
		this.history.push(url);
		this.urlPointer++;

		return url;
	}

	back() {
		if(this.urlPointer === 0) {
			return null;
		}

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

history.visit('B') 
history.visit('C') 
history.visit('D') 

history.back()
console.log(history.back()) // 'B'

history.visit('E')
history.visit('F')
console.log(history.history)

history.back()
console.log(history.back()); // 'B'