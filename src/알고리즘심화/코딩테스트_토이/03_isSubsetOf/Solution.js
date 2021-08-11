const isSubsetOf = function (base, sample) {
  // 분석
  // 우선 for 문을 통해 sample을 탐색하고 해당 요소가 base이 있는지 여부를 indexOf를 통해 검색한다.
  // 하나라도 -1이 나오면 false, 아니면 true를 반환한다.

  // 풀이
  // 1. 우선 최대한 앞에서 끊어줄 수 있도록 구상을해야하기 때문에,
  // 비교를 함에 있어서 편할 수 있도록 오름차순 정렬을 수행한다.
  base.sort((a, b) => a - b)
  sample.sort((a, b) => a - b)

  // 2. 인덱스의 시작 부분이 지속적으로 바뀌는 함수이다.
  // 오름차순 정렬된 두 개의 배열을 효율적으로 비교하기 위함이다.
  // 같으면 해당 인덱스를 반환하면 되고, 아니라면 -1을 반환한다.
  const searchAndCheck = (sampleEl, base, startIndex) => {
    for (let i = startIndex; i < base.length; ++i) {
      if (sampleEl === base[i]) {
        return i;
      }
      // samlpeEl의 값보다 base[i]가 커진다는 건 같은 케이스에서 걸리지 않았단 얘기고
      // 이것은 즉, 더 이상 base에는 sampleEl이 존재하지 않는 것이므로 부분집합이 아닌셈이다.
      else if (sampleEl < base[i]) {
        return -1;
      }
    }
    // 들어온 sampleEl의 값이 base의 끝요소보다 크다면, 
    // 전부 탐색하더라도 위 조건문들에 걸리지 않기 때문에
    // for문이 끝났을 때도 부분집합이 아닌 것으로 판단된다
    return -1;
  }

  // 3. sample을 우선 순회하면서 base에 해당하는 값이 있는지를 비교해간다.
  // 구현한 함수를 통해 진행을 하되, 항상 base의 첫 부분부터 비교하게끔 로직을 짜선 안된다.
  // 그럼 효율성이 좋을 게 없다. 두 배열은 오름차순 정렬이 되어 있기 때문에, 
  // 이미 sample의 선행값이 비교를 끝낸 순간(비교했는데 base에 값이 있었다?)
  // 다음비교 때는 그 해당 인덱스의 다음부분부터 비교가 이루어지면 되는 것이다.
  // 그 인덱스를 보관하기 위한 startIndex라는 변수를 만들고 함수로부터 반환된 값을 넣어야 한다.
  let startIndex = 0;
  for (i = 0; i < sample.length; ++i) {
    startIndex = searchAndCheck(sample[i], base, startIndex);
    if (startIndex === -1) {
      return false;
    }
  }
  return true;
}




