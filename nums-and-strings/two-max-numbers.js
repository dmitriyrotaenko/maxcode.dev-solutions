// https://maxcode.dev/problems/two-max/

const numbers = [8, 5, 6, 6, 10, 3, 19, 19, 10, 19, 7];
console.log(twoMaxNumbers(numbers)); // [19, 10];


function twoMaxNumbers(numbers) {
  return numbers.reduce(res => {
    if(res.length >= 2) return res;

    return [
      ...res,
      Math.max(...numbers.filter(n => !res.includes(n)))
    ];

  }, [Math.max(...numbers)]);
}

