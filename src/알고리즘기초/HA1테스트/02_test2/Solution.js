function test2(num) {
  let str = String(num);
  let result = 0;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === '-') {
      result = Number(str[i] + str[i + 1]);
      ++i;
    }
    else {
      result += Number(str[i]);
    }
  }
  return result;
}




