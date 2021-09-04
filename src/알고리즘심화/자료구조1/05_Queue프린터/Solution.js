function queuePrinter(bufferSize, capacities, documents) {
  // 풀이
  let bufferArr = new Array(bufferSize).fill(0);
  let count = 0;

  const sum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr);
  }

  while (bufferArr.length > 0) {
    if (documents[0] + sum(bufferArr) > capacities) {
      bufferArr.shift();
      if (documents[0] + sum(bufferArr) <= capacities) {
        bufferArr.push(documents.shift());
      }
      else bufferArr.push(0);
    }
    else if (documents[0] + sum(bufferArr) <= capacities) {
      bufferArr.shift();
      bufferArr.push(documents.shift());
    }
    else if (documents.length === 0) {
      bufferArr.shift();
    }
    ++count;
  }
  
  return count;
}
