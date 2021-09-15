const decompression = function (image) {
  // 재귀적으로 해결하면 어렵지 않게 풀릴 것 같다.
  // 최소단위가 될때까지 계속 4등분해서 재귀를 보내고
  // 최소단위가 된 순간부터 값을 받아온다.

  // 풀이
  const decomp = (rowS, rowE, colS, colE, image) => {

    if (rowS === rowE) return String(image[rowS][colS]);

    let rowM = parseInt((rowS + rowE) / 2);
    let colM = parseInt((colS + colE) / 2);
    const leftUp = decomp(rowS, rowM, colS, colM, image);
    const rightUp = decomp(rowS, rowM, colM + 1, colE, image);
    const leftDown = decomp(rowM + 1, rowE, colS, colM, image);
    const rightDown = decomp(rowM + 1, rowE, colM + 1, colE, image);

    let result = leftUp + rightUp + leftDown + rightDown;
    if (result === '1111') return '1';
    else if (result === '0000') return '0';
    else return 'X' + result;
  }

  return decomp(0, image.length - 1, 0, image.length - 1, image);
}