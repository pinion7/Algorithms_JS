let word = returnWordWithJoy('I love coding');

// 아래 코드는 변경하지 마세요
function returnWordWithJoy(word) {
  if (typeof word !== 'string') {
    return 'wrong type';
  } else {
    return word + '!';
  }
}