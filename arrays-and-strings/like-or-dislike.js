// https://maxcode.dev/problems/like-dislike/

function likeOrDislike(buttons) {
  return buttons.reduce((res, action) => res === action ? 'Nothing' : action, "Nothing");
}

console.log(likeOrDislike(["Dislike"])); // "Dislike"
console.log(likeOrDislike(["Like", "Like"])); // "Nothing"
console.log(likeOrDislike(["Dislike", "Like"])); // "Like"
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"
