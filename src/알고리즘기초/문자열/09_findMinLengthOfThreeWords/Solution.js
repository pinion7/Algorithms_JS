function findMinLengthOfThreeWords(word1, word2, word3) {
  let shortestWord = word1;
  if (word1.length > word2.length) {
    shortestWord = word2;
    if (word2.length > word3.length) {
      shortestWord = word3;
    }
  }
  else if (word1.length > word3.length) {
    shortestWord = word3;
  }
  return shortestWord.length; 
}



