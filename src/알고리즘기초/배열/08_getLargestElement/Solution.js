function getLargestElement(arr) {
  maxNum = arr[0];
  for (let val of arr) {
    if (maxNum < val) maxNum = val;
  }
  return maxNum;
}




