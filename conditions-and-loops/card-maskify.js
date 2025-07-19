// https://maxcode.dev/problems/credit-card-mask/

console.log(maskify("4556364607935616")); // "############5616"
console.log(maskify("123456789")); // "#####6789"
console.log(maskify("789")); // "789"


function maskify(cardNum) {
	return cardNum.slice(-4).padStart(cardNum.length, '#');
}