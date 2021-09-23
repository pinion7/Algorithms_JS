const knapsack = function (weight, items) {
  // 풀이
  // 0부터 weight까지 모든 무게범위를 축적할만한 배열을 만들고
  // 아이템은 무게범위를 초과하는 값을 제외하고 필터링 해줌
  let backPack = new Array(weight + 1).fill(0);
  items = items.filter((item) => item[0] <= weight);


  // 첫 아이템의 무게와 가치가, 생성한 무게범위 내에 담길 수 있는지를 파악하고 일단 가능한 부분에 모두쌓아줌
  // 이를 위해 일단 다른 더미 변수를 생성하여 깊은 복사 및 수정해주고, 나중에 이를 본 배낭에 옮겨 줌
  // 복사하여 쓰지 않고 자기 자신에 누적해가면 계산오차가 발생할만한 여지가 있기 때문.
  // 특정 무게가 허용하는 최대가치를 쌓을 수 있게 지속적으로 변화를 주며 쌓아간다.
  items.forEach(([wt, v]) => {
    const dummyBag = backPack.slice(0);
    for (let i = 1; i <= weight; i++) {
      if (i - wt >= 0 && backPack[i - wt] + v > backPack[i]) {
        dummyBag[i] = backPack[i - wt] + v;
      }
      if (backPack[i - 1] > backPack[i]) {
        dummyBag[i] = backPack[i - 1];
      }
    }
    backPack = dummyBag;
  });
  
  return backPack[weight];
}