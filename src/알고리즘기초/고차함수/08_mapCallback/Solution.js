function mapCallback(func, arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = func(arr[i]);
  }
  return newArr;
}





