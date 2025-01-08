function Person(firstName, lastName) {
  return Object.defineProperty({
		firstName,
		lastName
	}, 'fullName', {
		set(fullName) {
			[firstName, lastName] = fullName.split(" ");
      this.firstName = firstName; 
      this.lastName = lastName;
		},
		get() {
			return `${this.firstName} ${this.lastName}`;
		}
	});
}

const p1 = createPerson('John', 'Doe');
p1.fullName = 'Giga Chad'

console.log(p1.fullName)

p1.firstName = 'Chippi'

console.log(p1.fullName) // Chippi Chad

