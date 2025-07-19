// https://maxcode.dev/problems/shortest-word/

function shortestWord(s) {
  return Math.min(...s.split(' ').map(word => word.length));
}

const str = "lorem ipsum dolor sit amet";

console.log(shortestWord(str)); // 3
