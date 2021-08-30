const rotateMatrix = function (matrix, K) {
  if (matrix.length === 0) return [];

  // 우선 90도로 1회전했을 때의 행렬을 가진 new매트릭스를 만든 뒤 0으로 채운다
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; ++i) {
    newMatrix.push(new Array(matrix.length).fill(0))
  }

  // newMatrix가 90도로 1회전 했을 때의 상태를 만들어준다.
  for (let i = 0; i < matrix[0].length; ++i) {
    for (let j = 0; j < matrix.length; ++j) {
      newMatrix[i][j] = matrix[matrix.length - j - 1][i]
    }
  }

  // K % 4가 0이면 몇회전을 했든 원본matrix로 돌아온 것
  if (K % 4 === 0) return matrix;

  // K % 4가 1이면 몇회전을 했든 newMatrix 상태인 것 (어드밴스드 이전 테스트케이스엔 K가 입력되지 않는듯)
  else if (K === undefined || K % 4 === 1) return newMatrix;

  // K % 4가 2면 matrix의 행렬이 모두 리버스 된 것
  else if (K % 4 === 2) {
    for (let i = 0; i < matrix.length; ++i) {
      matrix[i].reverse();
    }
    return matrix.reverse();
  }

  // K % 4가 3이면 newMatrix의 행렬이 모두 리버스 된 것
  else if (K % 4 === 3) {
    for (let i = 0; i < newMatrix.length; ++i) {
      newMatrix[i].reverse();
    }
    return newMatrix.reverse();
  }
};