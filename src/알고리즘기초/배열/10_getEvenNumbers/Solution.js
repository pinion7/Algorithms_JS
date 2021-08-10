function getEvenNumbers(arr) {
  let result = [];
  for (let val of arr) {
    if (val % 2 === 0) {
      result.push(val);
    }
  }
  return result;
}




