function barcode(len) {
  // 풀이
  // 중복 체크 함수부를 먼저 구현해야한다.
  // 문자열이 들어오면 우선 리버스를 해서 순서를 뒤집는데, 
  // 리버스함수 자체는 배열에만 적용가능하기 때문에 split과 join을 활용해야한다.
  // 문자열을 뒤집는 이유는, 어차피 하나둘 만들어져갈 str이 앞부분은 체킹이 완료된 상태이기 때문에,
  // 뒤에 부분부터 체킹하기 위함이고 비교하기에도 리버스를 하는 것이 편하기 때문이다.
  const duplicatedCheck = (str) => {

    let reversed = str.split('').reverse().join('')
    // 뒤집힌 문자열의 길이를 2로 나누는 이유는, 
    // 수열을 체크해감에 있어 절반의 길이를 최대로 해야 나머지 절반과 비교 체크가 가능하기 때문이다.
    let halflength = Math.floor(reversed.length / 2)

    // 어차피 문자열의 첫번째는 0번 인덱스이기 때문에, i를 1로 두어야 slice했을 때 최초의 문자부터 체크하기 편하다.
    // 0, i는 0부터 i직전까지의 문자열이고, i, i+i는 i부터 i만큼의 길이 직전만큼의 문자열이다. 
    // -> 즉, 같은 길이의 문자를 비교하는 셈이라고 볼 수 있다.
    // ex) slice(0, 2) : 0~1 / slice(2, 2+2) : 2~3
    for (let i = 1; i <= halflength; ++i) {
      if (reversed.slice(0, i) === reversed.slice(i, i + i)) {
        return true // 중복되면 참 반환
      }
    }
    return false // 중복되지 않으면 거짓 반환 -> 거짓이면 이 문자열을 고정시키면되고, 참이면 다시 문자를 재구성하면 된다.
  }

  // 이제 str을 만들어나갈 수 있는 함수부를 만든다.
  let char = '123'
  const getBarcode = (str) => {
    // 재귀함수로 작성하여 결국 리턴 값에 중첩되어 완성된 최소값문자열을 반환시켜줄 수 있어야 한다.
    // for 문을 돌려 str을 붙여나가야 하는데, 
    // 그 안에서 중복검사도 해야하고 어떻게 붙여나가야 올바른 방식이 될지를 결정해나가야 한다.
    // 함수부 밖에는 기본적으로 1,2,3으로만 이루어진 수열이기 때문에 123이란 형태의 문자열을 하나 선언해둘필요가 있다.
    // for문 바깥에는 최종적으로 len과 길이 같은 문자열을 반환해서 재귀함수부로 돌려줄 조건문이 필요하다.
    if (str.length === len) return str

    // for문을 돌려서 char에 있는 수를 하나씩 붙여주도록 한다. 
    // 다만 중복체크를해서 중복되지않는것만 체크될 수 있도록 조건문을 건다.
    for (let i = 0; i < char.length; ++i) {
      if (!duplicatedCheck(str + char[i])) {
        const finalVal = getBarcode(str + char[i])
        // finaleVal이 존재하면 finaVal을 반환함으로써 콜스택을 전부빠져나오고 아웃풋을 완성하게 된다.
        if (finalVal) {
          return finalVal;
        }
      }
    }
  }

  return getBarcode('');
}