let longestPalindrome = function (str) {
  // 문자들 중에 앞뒤의 시작부터 좁혀오면서 내부가 절반까지가 전부같은걸 찾고
  // 그 중에서 가장 긴 문자의 길이를 리턴하면 어떨까?
  // 첫 문자이거나 끝문자가 아니면 공백도 2번 포함해서 리턴하는 것이다.
  // 단 이어지는 문자와도 또 똑같은 부분이 있을 수 있가 때문에
  // 만약 가장 긴 문자열을 발견한다면 서로 역방향에 살을 붙여가면서 같은 부위까지 체크를 해야할 것 같다.

  // 풀이
  // 우선 스플릿으로 앞뒤가 같은 문자열을 찾고 그중 최대길이를 얻어보자.
  if (str.length <= 1) return str.length;
  const arr = str.split(' ');
  const spaceNum = str.length - 1;
  const temp = [];
  let isEqual = false;

  for (let i = 0; i < arr.length; ++i) {
    let end = arr[i].length - 1;
    for (let j = 0; j < arr[i].length; ++j) {
      if (j === end - j || j > end - j) {
        temp.push(arr[i])
        break;
      }
      else if (arr[i][j] === arr[i][end - j]) {
        isEqual = true;
        continue;
      }
      else {
        isEqual = false;
        break;
      }
    }
  }

  temp.sort((a, b) => b.length - a.length);
  let targetNum = temp[0].length;

  let newStr = str.split('').reverse().join('');
  let start1 = str.indexOf(temp[0]) + targetNum;
  let start2 = newStr.indexOf(temp[0]) + targetNum;
  let count = 0;

  for (let i = 0; i < str.length; ++i) {
    if (str[start1 + i] === newStr[start2 + i]) ++count;
    else break;
  }

  return targetNum + count;
};
