function firstCharacter(str) {
  if (str.length === 0) {
    return '';
  }
  let arr = str.split(' ');
  let result = '';
  for (let el of arr) {
    result += el[0];
  }
  return result;
}





