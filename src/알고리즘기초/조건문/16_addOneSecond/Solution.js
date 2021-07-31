function addOneSecond(hour, minute, second) {
  if (second === 59) {
    if (minute === 59) {
      if (hour === 23) {
        return `1초 뒤에 0시 0분 0초 입니다`;
      }
      return `1초 뒤에 ${hour+1}시 0분 0초 입니다`;
    }
    return `1초 뒤에 ${hour}시 ${minute+1}분 0초 입니다`;
  }
  return `1초 뒤에 ${hour}시 ${minute}분 ${second+1}초 입니다`;
}


