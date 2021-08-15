function removeOddValues(obj) {
  for (let key in obj) {
    if (obj[key] % 2 !== 0 && typeof obj[key] === 'number') {
      delete obj[key];
    }
  }
}





