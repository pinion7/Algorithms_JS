function reverseArr(arr) {
  if (arr.length === 0) return arr;
  return reverseArr(arr.slice(1)).concat(arr[0]);
}


