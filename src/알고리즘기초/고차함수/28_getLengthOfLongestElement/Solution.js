function getLengthOfLongestElement(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, cur) => {
    if (acc.length >= cur.length) return acc;
    return cur;
  }).length;
}





