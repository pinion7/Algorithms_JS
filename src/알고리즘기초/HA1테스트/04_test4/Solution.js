function test4(arr) {
  // 객체화시켜 다시 풀어보려고 한다
  let obj = {};
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i].length; ++j) {
      obj[arr[i][j][0]] = arr[i][j][1];
    }
    newArr.push(obj)
    obj = {}
  }

  newArr.sort((a, b) => {
    return a.age - b.age
  })
// sort는 뮤터블

  let result = [];

  return newArr.map((el) => {
    if (el.lastName === undefined) {
      result = el.firstName
    }
    else if (el.firstName === undefined) {
      result = el.lastName
    }
    else {
      result = el.firstName + ' ' + el.lastName
    }
    return result
  })
}




