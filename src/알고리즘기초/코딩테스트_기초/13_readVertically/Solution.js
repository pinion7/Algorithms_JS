function readVertically(arr) {
  let maxLength = 0;
  for (let el of arr) {
    if (el.length > maxLength) {
      maxLength = el.length;
    }
  }

  let result = '';
  for (let i = 0; i < maxLength; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      if (arr[j][i] !== undefined) {
        result += arr[j][i];
      }
    }
  }
  return result;
}



