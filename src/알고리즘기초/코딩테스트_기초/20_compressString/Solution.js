function compressString(str) {
  // for문 if문 for문 if문을 여러번 중첩해야할 것으로 보인다.
  // 첫 for문 안에 반복여부를 체크하는 조건문을 걸고, 그 조건문 안에 for문을 또 만들어 반복횟수를 카운트 한다
  // 그 전에 새로운 문자열 변수도 선언을 하고, 조건문에 해당되지 않으면 그냥 투입
  // 조건문에 해당되지만 반복횟수가 2이면 해당 문자를 두번 투입
  // 조건문에 3이상이면 카운트된 횟수 + 해당 문자를 투입한다.
  let count = 1;

  for (let i = 0; i < str.length + 1; ++i) {
   if (str[i] === str[i + 1]) {
     ++count;
   }
   else if (str[i] !== str[i + 1] && count >= 3) {
     result += count + str[i];
     count = 1;
   }
   else if (str[i] !== str[i + 1] && count === 2) {
     result += str[i] + str[i];
     count = 1;
   }
   else {
     result += str[i];
   }
  }
  return result;
}




