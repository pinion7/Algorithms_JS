function removeNumbersLargerThan(num, obj) {
  for (let key in obj) {
    if (obj[key] > num && typeof obj[key] === 'number') {
      delete obj[key];
    }
  }
}





