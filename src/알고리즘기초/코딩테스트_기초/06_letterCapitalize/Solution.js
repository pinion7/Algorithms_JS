function letterCapitalize(str) {
  // str.split(' ')띄어쓰기를 주었을 때, 공백과 공백 사이나 공백과 문자 사이에는 빈문자열이 배열로 들어간다.
  // 만약 위 상태에서 str.join(' ')을 하면 처음 모습그대로 반환된다.
  // 즉, 반복문 안에 조건문을 만들되, 빈문자열이 아닌 배열에 한해서만 첫 문자를 대문자로 바꿔주는 작업을 하면 된다.
  // toUpperCase함수를 사용하되, 첫글자의 대문자만 변환시켜야하므로 인덱스를 두번활용한다.
  // 다만 문자열은 문자를 하나 하나씩 변환시킬 수 없기 때문에, 다시 대입해주는 방향으로 진행한다.
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].length !== 0) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
  }
  return arr.join(' ');
}






