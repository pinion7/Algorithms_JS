function filterCallback(func, arr) {
  const newArr = [];
  for (let el of arr) {
    if(func(el)) newArr.push(el);
  }
  return newArr;
}





