function checkEvenOrNot(arr) {
  return arr.map((el) => {
    if (el % 2 === 0 && el !== 0) {
      return 'ok'
    }
    return 'no'
  })
}





