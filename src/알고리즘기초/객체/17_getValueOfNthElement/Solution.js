function getValueOfNthElement(arr, num) {
  if (arr.length === 0) {
    return 'no name';
  }
  else if (arr.length <= num) {
    return arr[arr.length - 1]['name'];
  }
  return arr[num]['name'];
}





