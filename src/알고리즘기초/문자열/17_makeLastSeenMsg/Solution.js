function makeLastSeenMsg(name, period) {
  if (period < 60) {
    return `${name}: ${period}분 전에 접속함`;
  }
  else if (period / 60 > 1 && period / 60 < 24) {
    return `${name}: ${Math.floor(period / 60)}시간 전에 접속함`;
  }
  else if (period / 60 > 24) {
    return `${name}: ${Math.floor(period / (60*24))}일 전에 접속함`;
  }
}



