// https://maxcode.dev/problems/population-growth/

function yearsToTarget(
  initialPopulation,
  naturalIncrease,
  immigration,
  targetPopulation,
) {

  let population = initialPopulation;
  let years = 0;

  while(population < targetPopulation) {
    population += Math.floor(population * naturalIncrease / 100 + immigration);
    years++;
  }

  return years;
}

console.log(yearsToTarget(1000, 2, 50, 1200)); // 3
