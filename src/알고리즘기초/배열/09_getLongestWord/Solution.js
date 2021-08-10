function getLongestWord(str) {
  let maxChar = '';
  str = str.split(' ');
  for (let val of str) {
    if (maxChar.length < val.length) {
      maxChar = val;
    }
  }
  return maxChar;
}




