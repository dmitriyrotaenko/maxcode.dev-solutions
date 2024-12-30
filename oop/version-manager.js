// https://maxcode.dev/problems/version-manager/
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

const vm = new VersionManager("2.0.3");

console.log(
  vm
    .major()     // "3.0.0"
    .minor()     // "3.1.0"
    .minor()     // "3.2.0"
    .minor()     // "3.3.0"
    .patch()     // "3.3.1"
    .release()
);
