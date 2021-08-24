function numberSearch(str) {
  if (str.length === 0) {
    return 0;
  }

  let sum = 0;
  let stringCount = 0;
  for (let i = 0; i < str.length; ++i) {
    if (Number(str[i])) {
      sum += Number(str[i]);
    }
    else if (Number(str[i]) !== 0) {
      stringCount++;
    }
  }
  return Math.round(sum / stringCount)
}




