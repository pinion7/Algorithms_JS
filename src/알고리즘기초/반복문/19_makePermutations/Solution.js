function makePermutations(str) {
  let result = '';
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < str.length; ++j) {
      if (i === 0 && j === 0) result += str[0] + str[0];
      else result += ',' + str[i] + str[j];
    }
  }
  return result;
}




