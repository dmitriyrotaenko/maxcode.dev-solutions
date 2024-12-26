class QueryParams {
	constructor(initialQuery = []) {
		this.queryParams = this.formatParams(initialQuery);
	}

	formatParams(params) {
		if(typeof params === 'object') {
			const queryParams = [];
			for (const name in params) {
				queryParams.push([name, params[name]]);
			}
			return queryParams;
		}
		return params?.split('&').map(pair => pair.split('='));
	}

	append(name, value) {
		this.queryParams.push([name, value]);
	}

	set(name, value) {
		this.queryParams = this._excludeAllByName(name);
		this.queryParams.push([name, value]);
	}

	has(name, value) {
		if(value === undefined) {
			return this.queryParams.some(([paramName]) => paramName === name);
		}

		return this.queryParams.some(([paramName, paramValue]) => paramName === name && paramValue === value);
	}

	get(name) {
		return this._findAllByName(name)?.[0]?.[1];
	}

	getAll(name) {
		return this._findAllByName(name).map(([_, value]) => value);
	}

	delete(name) {
		this.queryParams = this._excludeAllByName(name);
	}

	toString() {
		return this.queryParams
		.map(pair => pair.join('='))
		.join('&');
	}

	_findAllByName(name) {
		return this.queryParams.filter(([paramName]) => paramName === name);
	}

	_excludeAllByName(name) {
		return this.queryParams.filter(([paramName]) => paramName !== name);
	}
}
