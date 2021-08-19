const powerSet = function (str) {
  // 풀이 - pickOrNot
  // 이진트리 방식의 풀이다. 맞으면 픽 아니면 패스하는 방식이다.
  // 배열화 및 정렬, 중복문자 제거를 진행해준다. 
  const arr = str.split('').sort().reduce((acc, curr) => {
    if (acc[acc.length - 1] !== curr) return acc + curr;
    else return acc;
  });

  const newArr = [];
  const subsetFactory = (idx, char) => {
    // 부분집합 투입 및 탈출조건이다.
    if (idx === arr.length) {
      newArr.push(char)
      return;
    }

    // idx가 length와 같아질 때까지 재귀한다. (그래야 투입 가능)
    subsetFactory (idx + 1, char);

    // 위에서 빠져나온 idx, char에 마지막 문자열부터 합쳐서 재귀한다.
    subsetFactory (idx + 1, char + arr[idx])
  }

  // 공장장 풀가동
  subsetFactory(0, '')

  // 짬순 정렬 및 결과반환
  return newArr.sort()
}