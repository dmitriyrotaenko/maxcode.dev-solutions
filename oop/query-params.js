/*
Это URL — Uniform Resource Locator, также известный как адрес сайта.

Часть с offset=20&limit=5 называется query string и позволяет указать параметры запроса. Например, в примере выше мы запрашиваем список покемонов и указываем:
	- offset — сколько покемонов из начала списка пропустить;
	- limit — максимальное количество покемонов в ответе.
Например, offset=20&limit=5 возвращает покемонов с номерами 21, 22, 23, 24 и 25 (5 штук, первые 20 пропустили).

Запрос с параметрами offset=55&limit=3 вернет покемонов с номерами 56, 57, 58 (3 штуки, первые 55 пропустили)

Необходимо реализовать класс QueryParams, который позволит формировать строку в формате query string.
*/

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

const u1 = new QueryParams("genre=comedy&year=2023");
console.log(u1.get("genre")); // "comedy"

const u2 = new QueryParams({ genre: "comedy", year: "2023" });
console.log(u2.get("year")); // "2023"

const u3 = new QueryParams("genre=comedy&year=2023");
u3.append("year", "2024");
u3.append("year", "2025");

console.log(u3.toString());
// "genre=comedy&year=2023&year=2024&year=2025"

u3.set("year", "1999");

console.log(u3.toString());
// "genre=comedy&year=1999"

const u4 = new QueryParams("genre=comedy&year=2023");
u4.delete("year");

console.log(u4.toString()); // "genre=comedy"

const u5 = new QueryParams(
  "genre=comedy&year=2023&year=2024&year=2025"
);

console.log(u5.get("genre")); // "comedy"
console.log(u5.get("year")); // "2023"
console.log(u5.getAll("genre")); // ["comedy"]
console.log(u5.getAll("year")); // ["2023", "2024", "2025"]

const u6 = new QueryParams(
  "genre=comedy&year=2023&year=2024&year=2025"
);

console.log(u6.has("year")); // true
console.log(u6.has("year", "2023")); // true
console.log(u6.has("year", "1999")); // false
