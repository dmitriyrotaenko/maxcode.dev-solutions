// https://maxcode.dev/problems/leap-year/

function isLeapYear(year) {
  return year % 100 === 0 ?
         year % 400 === 0 :
         year % 4 === 0;
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2345)); // false
