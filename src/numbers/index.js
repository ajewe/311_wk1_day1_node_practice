const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 === 0) {
    return true;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let aSum = arr.reduce((acc, val) => 
    acc + val
  );
  return aSum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  //any combo of numbers in an array equals a given sum.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true
      } 
    }
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}