function test3(num) {
  let str = String(num);
  let result = 1;
  let i = 0;
  while (num > 9) {
    result *= Number(str[i]);
    
    if (i === str.length - 1) {
      num = result;
      str = String(result);
      result = 1;
      i = 0;
    }
    else {
      ++i;
    }
  }
  return num;
}




