function hasRepeatedCharacter(str) {
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < str.length; ++j) {
      if (i !== j && str[i] === str[j]) {
        return true;
      }
    }
  }
  return false;
}




