const inequalityNumber = function (signs) {
  // 최대부등호수가 되려면 최대한 앞자리에 큰 수가 나와야 할 것이며
  // 최소부등호수는 앞자리에 최대한 작은 수가 나와야할 것이다.
  // 부등호의 방향이 무엇인지에 따라서 갈릴 수 있는데
  // 1. 최대부등호 수의 경우 (일반적인 경우)
  // < 일때: 8이 시작값이고
  // > 일때: 9가 시작값이지만
  // 가령 < < 가 연속된다면 7이 가장 앞에 나올 수 있는 수가 될 것이다.
  // 그러므로 어떤 부등호로 시작하는지도 중요하지만, 얼마나 연속되는지는 더 중요한 포인트이다.
  // 2. 최소부등호 수의 경우 (마찬가지다)
  // < 일때: 0이 시작값이고
  // > 일때: 1이 시작값이지만
  // 가령 > > 이 연속되면 2가 가장 앞선 시작이 될 것이다. 
  // 이러한 점에 주의하여 풀이를 진행해보자

  // 풀이
  // 우선 signs를 배열의 형태로 바꿀 필요가 있다. (공백을 기준으로)
  const newSigns = signs.split(' ');

  // 배열화된 signs들을 순회하며 최대 숫자와 최소 숫자를 찾아 각각의 변수에 대입해가야한다.
  // splice를 활용해서 풀면 될 것 같다.

  // 최대값 생성 함수
  const maxValCreate = (signs, max) => {
    let num = 0;
    const temp = [];
    for (let i = 8; i >= 9 - signs.length; --i) {
      if (signs[num] === '>') max.push(i);
      else {
        let idx = temp.lastIndexOf('>');
        if (idx === -1) max.splice(0, 0, i);
        else max.splice(idx + 1, 0, i);
      }
      temp.push(signs[num++]);
    }
    return max.join('');
  }
  
  // 최소값 생성 함수
  const minValCreate = (signs, min) => {
    let num = 0;
    const temp = [];
    
    for (let i = 1; i <= signs.length; ++i) {
      if (signs[num] === '<') min.push(i);
      else {
        let idx = temp.lastIndexOf('<');
        if (idx === -1) min.splice(0, 0, i);
        else min.splice(idx + 1, 0, i);
      }
      temp.push(signs[num++]);
    }
    return min.join('');
  }

  // 최대값 - 최소값
  return maxValCreate(newSigns.slice(0), [9]) - minValCreate(newSigns.slice(0), [0]);
};