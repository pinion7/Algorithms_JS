function superIncreasing(arr) {
  // 우선 반복문으로 배열 전체를 순회한다고 생각해야한다.
  // arr[i]는 arr[0]부터 arr[i-1]의 합보다 커야하기 때문에 누적시킬만한 변수를 만들어야 한다.
  let accValue = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] <= accValue) {
      return false;
    }
    accValue += arr[i];
  }
  return true;
}



