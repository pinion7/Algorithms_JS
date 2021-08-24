function decryptCaesarCipher(str, secret) {
    // 아스키 코드번호를 활용한다.
  // 알파벳은 아스키코드 내에서 순서대로 번호가 주어져 있기 때문이다.
  // 반복문을 통해 문자열을 탐색하면서, 각 문자 하나하나에 대한 아스키 코드번호를 알아낸다
  // 동시에 알아낸 코드번호에 -secret을 주고, 그것을 다시 문자열로 변환시켜 새로운 변수에 투입한다.
  // 반복문이 끝난 후 반환한다.
  // * 문자 -> 코드번호 변환은 charCodeAt() 활용한다.
  // * 코드번호 -> 문자 변환은 String.fromCharCode()를 활용한다.

  // 아스키코드만으로는 온전히 수행하기 어려울듯 하다.
  // 아스키코드변환으로는 그냥 배열화 도움만 받되, slice를 활용해야만 음수(-) 인덱스번호에 대한 대처가 가능할 것 같다.
  let alphabet = [];
  for (let i = 97; i < 123; ++i) {
      alphabet.push(String.fromCharCode(i));
    }

  let result = '';
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === ' ') {
      result += ' ';
    }
    else {
      keyNumber = alphabet.indexOf(str[i]) - secret
      result += alphabet.slice(keyNumber, keyNumber + 1);
    }
  }
  return result;
}





