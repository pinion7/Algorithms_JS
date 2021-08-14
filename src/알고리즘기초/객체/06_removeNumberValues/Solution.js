function removeNumberValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      delete obj[key];
    }
  }
}





