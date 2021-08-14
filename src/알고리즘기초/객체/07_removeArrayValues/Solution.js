function removeArrayValues(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
}





