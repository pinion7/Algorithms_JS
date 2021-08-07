function characterAndNumber(word) {
  let result = '';
  for (let i = 0; i < word.length; ++i) {
    result += word[i] + i;
  }
  return result;
}




