function test2 (n, m) {
  // 순열 문제이다.

  // 풀이
  // 1. n만큼의 숫자를 배열에 담는다.
  const arrN = [];
  for (let i = 1; i <= n; ++i) {
    arrN.push(i);
  }

  // 2. 순열 함수도 구현한다.
  const result = [];
  const getPermutation = (arr, bucket) => {
    if (bucket.length === m) {
      result.push(bucket);
      return;
    }
    for (let i = 0; i < arr.length; ++i) {
      const temp = arr.slice();
      temp.splice(i, 1);
      getPermutation(temp, bucket.concat(arr[i]));
    }
  }

  getPermutation(arrN, []);
  return result.map(el => el.join('') * 1);
};





