const uglyNumbers = function (n) {
  // 2,3,5를 각각곱하되 가장 작은 값만 저장한다.
  // set을 사용해서 담아줌으로써 중복되지 않은 값들만 담는다.
  // 배열화 시킨 후 n번째인 수를 리턴해준다.

  // 풀이
  const uglySet = new Set();
  uglySet.add(1);
  let idx2 = 0;
  let idx3 = 0;
  let idx5 = 0; 

  while (uglySet.size < n) {
    const temp = [...uglySet];
    let uglyNum2 = temp[idx2] * 2;
    let uglyNum3 = temp[idx3] * 3;
    let uglyNum5 = temp[idx5] * 5;

    let minVal = Math.min(uglyNum2, uglyNum3, uglyNum5);
    uglySet.add(minVal);

    if (uglyNum2 === minVal) ++idx2;
    else if (uglyNum3 === minVal) ++idx3;
    else ++idx5;
  }

  return [...uglySet][n - 1];
};