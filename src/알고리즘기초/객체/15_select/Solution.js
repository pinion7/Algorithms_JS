function select(arr, obj) {
  obj2 = {};
  for (let el of arr) {
    if (el in obj) obj2[el] = obj[el];
  }
  return obj2;
}





