/*
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
  const sortedArr = str
    .toLowerCase()
    .split('')
    .sort();

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return false;
    }
  }

  return true;
}