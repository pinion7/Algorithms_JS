function getIndex(arr, num) {
  return arr.filter((el) => {
    if (el > num) return false;
    return true;
  }).length;
}





