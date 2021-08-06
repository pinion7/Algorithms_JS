function getMaxNumberFromString(str) {
  if (str === '') return '0';

  for (j = 9; j > 0; j--) {
    for (i = 0; i < str.length; i++) {
      if (str[i] === String(j)) return `${j}`;
    }
  }
}




