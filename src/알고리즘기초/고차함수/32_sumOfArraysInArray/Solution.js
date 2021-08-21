function sumOfArraysInArray(arr) {
  let newArr = arr.reduce((acc, cur) => {
    return acc.concat(cur);
  });

  return newArr.reduce((acc, cur) => {
    if (typeof cur === 'number') return acc + cur;
    return acc;
  }, 0);
}





