function take(num, arr) {
  if (num > arr.length) return arr
  if (num === 0) return [];
  return [arr[0]].concat(take(--num, arr.slice(1)));
}


