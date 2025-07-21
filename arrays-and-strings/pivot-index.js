// https://maxcode.dev/problems/pivot-index/

function pivotIndex(arr) {
  const sum = arr.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;

  for(let i = 0; i < arr.length; i++) {
    const rightSum = sum - leftSum - arr[i];

    if(leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

//            0  1  2  3  4  5  6
//           -----------     ----
const arr1 = [4, 2, 1, 3, 7, 6, 4];

console.log(pivotIndex(arr1)) // 4

const arr2 = [4, 2, -5, 3];

console.log(pivotIndex(arr2)) // 0


