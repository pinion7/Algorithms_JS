function printObject(obj) {
  str = '';
  for (let key in obj) {
    str += `${key}: ${obj[key]}\n`
  }
  return str;
}






