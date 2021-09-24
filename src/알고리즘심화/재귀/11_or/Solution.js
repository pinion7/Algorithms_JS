function or(arr) {
  if (arr.length === 0) return false;
  if (arr[0]) return true;
  return or(arr.slice(1));
}


