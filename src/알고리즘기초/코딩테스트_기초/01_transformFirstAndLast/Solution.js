function transformFirstAndLast(arr) {
  obj = {};
  if (arr.length !== 0) {
    obj[arr[0]] = arr[arr.length - 1];
  }
  return obj;
}





