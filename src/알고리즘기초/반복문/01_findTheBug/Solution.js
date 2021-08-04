function findTheBug(word) {
  for (i = 0; i < word.length; i++) {
    if (word[i] === '#') {
      return i;
    }
  }
  return undefined;
}



