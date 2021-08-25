function test1(str) {
  str = str.toLowerCase();
  let obj = {};
  let arr = str.split(' ');
  for (let el of arr) {
    if (el !== '') {
      if (obj[el] === undefined) obj[el] = 1;
      else ++obj[el];
    }
  }
  return obj;
}




