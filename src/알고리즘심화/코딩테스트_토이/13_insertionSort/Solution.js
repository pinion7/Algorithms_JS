const insertionSort = function (arr, callback = (val => val)) {
  // 삽입 정렬은 두 번째 배열의 요소부터 기준으로하여 정렬을 진행한다.
  // 기준값보다 크면 현재 인덱스를 다음 인덱스에 삽입하고, 현재 인덱스에는 기준값을 삽입한다.
  // 현재 인덱스를 줄여가며 계속 기준값과 비교해, 정렬을 진행해주게 되고
  // 반복문이 돌때마다 기준값도 그 다음 배열의 요소로 옮겨간다.
  // 버블과 비슷한 구석이 있지만, 버블은 전체를 다 순환하고도 다시 처음부터 순환해서 정렬이 완료될때까지 점검을 해야하는 반면
  // 삽입은 세부과정은 좀 더 길 수 있지만, 한번의 큰 순회만으로 정렬을 완료할 수 있는 게 특징이다.
  // 더 효율적이라고도 볼 수 있을 것 같다.

  // 풀이 1
  let newArr = [arr[0]];

  // 기존 배열 두 번째 값부터 시작해서 새로운 배열의 바로 이전 인덱스와 비교해 크면 뒤에 푸쉬하고
  for (let i = 1; i < arr.length; ++i) {
    if (callback(arr[i]) > callback(newArr[i - 1])) {
      newArr.push(arr[i]);
    }
    // 작으면 새배열 안쪽을 비교해 적절한 인덱스에 삽입해준다.
    else {
      for (let j = 0; j < i; ++j) {
        if (callback(arr[i]) < callback(newArr[j])) {
          newArr.splice(j, 0, arr[i]);
          break;
        }
      }
    }
  }
  return newArr;
}