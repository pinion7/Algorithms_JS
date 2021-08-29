function drop(num, arr) {
  if (num > arr.length) return [];
  if (num === 0) return arr;
  return drop(--num, arr.slice(1));
}



