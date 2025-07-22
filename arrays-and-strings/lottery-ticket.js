// https://maxcode.dev/problems/lottery-ticket/

function bingo(ticket) {
  return ticket.filter(isWinningCombo).length;
}

function isWinningCombo(ticket) {
  const [chars, num] = ticket;
  for(let i = 0; i < chars.length; i++) {
    if(chars.charCodeAt(i) === num) return true;
  }

  return false;
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 89]])); // 2
