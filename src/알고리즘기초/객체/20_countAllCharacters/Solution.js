function countAllCharacters(str) {
  obj = {};
  for (let i = 0; i < str.length; ++i) {
    if (!(str[i] in obj)) {
      obj[str[i]] = 1;
    }
    else if (str[i] in obj) {
      obj[str[i]]++;
    }
  }
  return obj;
}





