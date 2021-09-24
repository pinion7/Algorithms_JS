function flattenArr(arr) {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      result.push(...flattenArr(el));
    }
    else result.push(el);
  }
  return result;
}


