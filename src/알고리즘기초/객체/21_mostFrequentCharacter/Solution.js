function mostFrequentCharacter(str) {
  let maxChar = '';
  let maxNum = 0;
  str = str.split(' ');
  str = str.join('');
  const obj = {};
  for (let i = 0; i < str.length; ++i) {
    if (!(str[i] in obj)) {
      obj[str[i]] = 1;
    }
    else if (str[i] in obj) {
      obj[str[i]]++;
    }

    if (obj[str[i]] > maxNum) {
      maxNum = obj[str[i]];
      maxChar = str[i];
    }
  }
  return maxChar;
}





