function arrLength(arr) {
  if (arr.isEmpty()) return 0;
  return 1 + arrLength(arr.slice(1));
}



