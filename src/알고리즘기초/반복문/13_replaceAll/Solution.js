function replaceAll(str, from, to) {
  let result = '';
  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== from) result += str[i];
    else if (str[i] === from) result += to;
  }
  return result;
}




