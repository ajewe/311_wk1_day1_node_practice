const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let arrStr = str.split('');
  let arrPair = [];

  for (let i = 0; i < arrStr.length; i = i + 2) {
    arrPair.push(arrStr[i] + arrStr[i + 1])
  }
  return arrPair;
}

const reverse = (str) => {
  // write code for strings.reverse
  let arr = str.split('');
  let reverseArr = arr.reverse();
  let reverseStr = reverseArr.join('');
  return reverseStr;
}

module.exports = {
  split,
  pairs,
  reverse
}