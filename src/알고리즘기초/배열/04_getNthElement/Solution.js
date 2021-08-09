function getNthElement(arr, index) {
  if (arr.length === 0) return undefined;
  else if (arr.length <= index) return 'out of index range';
  return arr[index];
}




