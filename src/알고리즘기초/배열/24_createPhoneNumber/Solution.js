function createPhoneNumber(arr) {
  if (arr.length === 8) {
    arr = [0, 1, 0].concat(arr);
  }
  arr.splice(7, 0, '-');
  arr.splice(3, 0, ')');
  arr.unshift('(');
  return arr.join('');
}



