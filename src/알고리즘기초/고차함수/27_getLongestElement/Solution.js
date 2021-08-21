function getLongestElement(arr) {
  if (arr.length === 0) return '';
  return arr.reduce((acc, cur) => {
    if (acc.length >= cur.length) return acc;
    return cur;
  })
}





