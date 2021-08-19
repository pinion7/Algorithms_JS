function computeProductOfAllElements(arr) {
  if (arr.length === 0) return 1;
  return arr.reduce((acc, cur) => acc * cur);
}





