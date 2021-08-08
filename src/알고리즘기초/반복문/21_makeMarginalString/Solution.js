function makeMarginalString(str) {
  let result = '';
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      result = result + str[j];
    }
  }
  return result;
}




