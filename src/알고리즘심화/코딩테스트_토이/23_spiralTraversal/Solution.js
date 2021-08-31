const spiralTraversal = function (matrix) {
  // 풀이
  // 우선 변수 선언 및 while문 조건 만들기
  const result = [];
  while (matrix.length > 0) {
    // step 1. 좌측 상단부터 우측 상단까지 뽑아 넣기
    result.push(...matrix.shift());

    // step 2. - 우측 상단부터 우측 하단까지 뽑아 넣기
    for (let i = 0; i < matrix.length; ++i) {
      result.push(matrix[i].pop());
    }

    // step 3. 우측 하단부터 좌측 하단까지 뽑아 넣기
    let temp = matrix.pop();
    if (Array.isArray(temp)) result.push(...temp.reverse());   
    else result.push(temp);

    // step 4. 좌측 하단부터 좌측 상단까지 뽑아 넣기
    for (let i = matrix.length - 1; i >= 0; --i) {
      result.push(matrix[i].shift());
    }
  }
  // 문자열화 시켜 결과반환
  return result.join('');
};