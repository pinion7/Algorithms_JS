function improveBook(books, speeds) {
  // 풀이 1
  const dDay = books.map((el, idx) => {
    return Math.ceil((100 - el) / speeds[idx]);
  })

  let result = [];
  let queue = [dDay.shift()];

  while (dDay.length > 0) {

    for (let i = 0; i < dDay.length; ++i) {
      if (queue[0] >= dDay[0]) queue.push(dDay.shift());
      else if (queue[0] < dDay[0]) {
        result.push(queue.length);
        queue = [dDay.shift()];
      }
    }
  }
  result.push(queue.length);
  return result;
}

  // 풀이 2
  // 책이 작업완료되는데 걸리는 시간을 우선 구해서 새로운 배열에 담는다
  let dDay = [];
  for (let i = 0; i < books.length; ++i) {
    // 소수점을 올림으로 처리해야 정확한 완료일 산출이 가능하다
    dDay[i] = Math.ceil((100 - books[i]) / speeds[i]) 
  }

  // dDay배열의 길이가 0보다 클때까지 돌아가는 반복문을 만든다 (출간완료되면 반복문 종료인 셈)
  // findIndex 함수를 활용하여 dDay[0]의 값보다 큰 배열의 가장 앞순위 인덱스를 산출한다.
  // 해당 인덱스가 바로 한꺼번에 출간될 책의 양 즉, 결과값이 된다.
  // 위 반복문이 정상적으로 돌아갈 수 있도록 출간 인덱스들도 배열에서 제외하여, 아직 출간 이전인 배열만 남긴다.

  let result = [];
  while (dDay.length > 0) {
    let publishIndex = dDay.findIndex((el) => el > dDay[0])

    if (publishIndex !== -1) {
      // publishIndex 바로 직전까지 출간 (인덱스는 0부터 시작하다는 것 주의)
      // 즉, 아래 publishIndex가 2라면, [0]번, [1]번 두개의 배열까지 출간된다고 보면됨)
      result.push(publishIndex)
      // 그리고 해당 인덱스 값부터 아직 출간되지 않은 것들이 됨
      dDay = dDay.slice(publishIndex)
    }

    else {
      // 만약 더 큰 인덱스가 없다?
      // 그럼 남은 책의 개수(배열의 길이)를 푸쉬하고 dDay를 빈배열로 만들면서 반복문을 종료
      result.push(dDay.length)
      dDay = []
    }
  }
  return result
// }