function computeAverageOfNumbers(arr) {
  if (arr.length === 0) return 0;
  let sum = arr.reduce((acc, cur) => acc + cur);
  return sum / arr.length;
}





