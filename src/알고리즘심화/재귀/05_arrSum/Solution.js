function arrSum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + arrSum(arr.slice(1))
}




