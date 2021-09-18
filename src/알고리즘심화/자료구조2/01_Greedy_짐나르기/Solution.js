function movingStuff(stuff, limit) {
  // 내림차순 정렬 하면 0번 인덱스가 최대값이고, 마지막 인덱스는 최소값임
  // 최대값과 최소값의 합이 제한무게보다 작으면 두개를 동시에 제거하고, 카운트 + 1;
  // 반면 제한무게보다 크다면, 최대값만 제거하고 카운트 +1;
  // 이런식으로 좁혀나가면 될 것 같다.
  stuff.sort((a, b) => a - b);

  let count = 0;
  while (stuff.length > 0) {
    if (stuff[0] + stuff[stuff.length - 1] > limit) {
      stuff.pop();
      ++count;
    }

    else {
      stuff.shift();
      stuff.pop();
      ++count;
    }
  }

  return count;
}