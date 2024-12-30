class VersionManager {
	constructor(initialVersion = '0.1.0') {
		this.versions = [initialVersion];
	}

	major() {
		this._registerVersion('major');
		return this;
	}

	minor() {
		this._registerVersion('minor');
		return this;
	}

	patch() {
		this._registerVersion('patch');
		return this;
	}

	rollback() {
		if(this.versions.length <= 1) {
			throw new Error('Cannot rollback!');
		}
		this.versions.pop();
		
		return this;
	}

	release() {
		return this.versions.at(-1);
	}

	_registerVersion(nextVersion) {
		const [currMajor, currMinor, currPatch] = this.versions.at(-1).split('.').map(Number);
		const versioningMap = {
			major: `${currMajor + 1}.0.0`,
			minor: `${currMajor}.${currMinor + 1}.0`,
			patch: `${currMajor}.${currMinor}.${currPatch + 1 }`
		}

		this.versions.push(versioningMap[nextVersion]);
	}
}

const vm = new VersionManager();

console.log(
  vm
		.major() // 1.0.0
		.patch()
		.patch()
		.patch()
		.minor()
		.rollback()
		.patch()
		.release()
		// .patch() // 1.0.1
		// .patch() // 1.0.2
		// .patch() // 1.0.3
		// .minor() // 1.1.0
		// .rollback() // 1.0.3
		// .patch() // 1.0.4
		// .release()
);


// 1. кол на метку
// 2. нет диспелов (Медная, кецуми, соби)
// 3. SPY + /assist must have