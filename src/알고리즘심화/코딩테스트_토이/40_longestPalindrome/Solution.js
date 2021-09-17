const jobAllocation = function (jobs, workersNum) {
  // 배열의 요소 중 최대값을 구하고
  // 배열을 앞에서부터 순회하면서 그 최대값과 같거나 커질때까지의 연속된 구간을 찾고
  // 그만큼을 묶어준다. 그런 반복을 배열의 끝까지 진행하고
  // 묶어진 개수가 workersNum과 같으면 묶은 값중 가장 큰 값을 리턴하면 되지만
  // 그렇지 않으면 workersNum에 맞게 마지막 묶음을 나눠준 뒤 다시 큰값을 찾아 리턴해준다.
  let maxVal = Math.max(...jobs);
  let minVal = Math.min(...jobs);
  let baseVal = maxVal + minVal;
  if (maxVal === minVal) baseVal = maxVal;
  
  const result = [];
  let sum = 0;
  jobs.reverse();
  while (jobs.length > 0) {
    sum += jobs.pop();
    if (sum >= baseVal) {
      result.push(sum)
      sum = 0;
      --workersNum;
    }

    if (jobs.length === workersNum && sum === 0) {
      result.push(...jobs.splice(0));
    }
  }

  return Math.max(...result);
};