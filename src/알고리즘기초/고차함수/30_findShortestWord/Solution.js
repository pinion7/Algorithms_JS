function findShortestWord(arr) {
  let newArr = arr.filter(el => typeof el === 'string')
  if (newArr.length === 0) return '';
  return lastArr = newArr.reduce((acc, cur) => {
    if (acc.length <= cur.length) return acc;
    return cur;
  })
}




