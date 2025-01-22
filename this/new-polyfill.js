function isPrimitive(value) {
	return value !== Object(value);
} 

function nouveau(constructor, ...args) {
	const proto = typeof constructor.prototype === 'object' ? constructor.prototype : Object.prototype;

	const newInstance = Object.create(proto);
	const constructorCallResult = constructor.call(newInstance, ...args);

	return isPrimitive(constructorCallResult) ? newInstance : constructorCallResult; 
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  return `Я ${this.name}, мне ${this.age}, и я учу джаваскрипт.`;
};

const petya = nouveau(Person, "Петя", 25);
console.log(petya.name); // Петя
console.log(petya.age); // 25
console.log(petya.hello()); // Я Петя, мне 25, и я учу джаваскрипт.


