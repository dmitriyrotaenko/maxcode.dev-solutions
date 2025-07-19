// https://maxcode.dev/problems/ndfl/

const taxableRangesWithRates = [
  {
    from: 0,
    to: 2_400_000,
    rate: 0.13,
  },
  {
    from: 2_400_000,
    to: 5_000_000,
    rate: 0.15,
  },
  {
    from: 5_000_000,
    to: 20_000_000,
    rate: 0.18,
  },
  {
    from: 20_000_000,
    to: 50_000_000,
    rate: 0.20,
  },
  {
    from: 50_000_000,
    to: Number.MAX_SAFE_INTEGER,
    rate: 0.22,
  }
];

function ndfl(income) {
  if(income < taxableRangesWithRates[0].from) return 13;

  let totalTax = 0;
  let taxedIncome = 0;

  for(let i = 0; taxedIncome < income; i++) {
    const taxable = Math.min(income, taxableRangesWithRates[i].to) - taxableRangesWithRates[i].from;
    totalTax += taxable * taxableRangesWithRates[i].rate;
    taxedIncome += taxable;
  }


  return totalTax / income * 100;
}

console.log(ndfl(3_000_000)); // 13.4
console.log(ndfl(1_000_000)); // 13
console.log(ndfl(60_000_000)); // 19.3


