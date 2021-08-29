function and(arr) {
  if (arr.length === 0) return true;
  if (!arr[0]) return false;
  return and(arr.slice(1));
}


