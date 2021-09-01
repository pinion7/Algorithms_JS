function radixSort(arr) {
  // 계수정렬은 카운팅 정렬이라고 하며, 해당 숫자가 몇번나왔는지를 각각 카운팅하여 기록해둔 뒤
  // 작은 숫자부터 카운팅숫자만큼 나열해가며 정렬하는 방식이다.
  // 효과적인 편이지만 정렬해야 하는 수의 단위가 커질 수록 시간복잡도가 기하급수적으로 늘어난다.
  // 때문에 높은 단위의 숫자가 있는 경우엔 사용하지 않는 것이 좋다.

  // 반면 기수정렬은 단위별로 정렬을 해나가는 방식으로서, 
  // 만약 오름차순이라면 1의자리, 10의자리, 100자리에 해당하는 숫자를 0~9순으로 쌓아가는 정렬이다.
  // 여러번 반복하게 될수는 있지만 큰 단위의 숫자를 정렬할 때 효과적이다. 

  // 풀이
  // 일반적으로 특정 수를 10으로 나누면 1의 자리수가 나머지로 나오게 되는데
  // 10의자리, 100의자리 부분도 나머지로 구하고 싶다면, 
  // 10의 자리 숫자는 특정 수를 우선 10으로 나눈 후(몫나누기로) 정수부만 남겨놓고, 그걸 다시 10(나머지 나누기)로 나눠야만 구할 수가 있다. 
  // 마찬가지로 100의 자리 숫자 100으로 나눈 후(몫나눗셈) 정수부만 남기고, 그걸 다시 10으로 나누면(나머지 나눗셈) 구할 수 있다.
  // 그런 로직을 바탕으로 while문으로 반복을 해가며 정렬을 하면 되는데, 
  // 자리 수를 높여가기 위한 몫나누기 시행 시 그보다 자리 수가 낮은 숫자는 몫이 0이 나온다.
  // 이럴땐 이미 그 숫자는 정렬된 상태일 것이기 때문에, 곧장 제외하여 결과배열에 담아주면 된다.

  // 음수와 양수를 쪼갠 배열 만들어 주기
  let positive = []
  let negative = []
  arr.forEach(el => {
    if (el >= 0) positive.push(el);
    else negative.push(Math.abs(el));
  })

  // 분자로 쓸 변수와, 결과 배열 선언
  let numer = 1;
  const result = [];

  // 음수와 양수를 쪼개서 정렬을 해주고 합치는 방식이 되어야 할 것 같다.
  while (positive.length + negative.length > 0) {
    const plusArr = [];
    const minusArr = [];

    // 양수 정렬 파트
    for (let i = 0; i < positive.length; ++i) {
      let temp = parseInt(positive[i] / numer);
      if (temp === 0) {
        // 몫이 0이면 이제 결과배열에 담아주면 된다. 그리고 곧바로 다음 인덱스를 탐색한다.
        result.push(positive[i]);
        continue;
      }
      else if (plusArr[temp % 10] === undefined) plusArr[temp % 10] = [];
      plusArr[temp % 10].push(positive[i]);
    }

    // 음수 정렬 파트
    for (let i = 0; i < negative.length; ++i) {
      let temp = parseInt(negative[i] / numer);
      if (temp === 0) {
        // 음수 파트의 경우 -1을 곱해서 unshift로 결과배열에 담아주면 된다.
        result.unshift(-1 * negative[i]);
        continue;
      }
      else if (minusArr[temp % 10] === undefined) minusArr[temp % 10] = [];
      minusArr[temp % 10].push(negative[i]);
    }

    // 평평하게 해서 도로 각각 넣어주고, numer는 10곱해서 단위 올리기
    positive = plusArr.flat();
    negative = minusArr.flat();
    numer *= 10;
  }

  return result;
}