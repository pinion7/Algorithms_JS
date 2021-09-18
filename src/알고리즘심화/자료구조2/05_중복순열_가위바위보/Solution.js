function rockPaperScissors (num) {
  // 풀이
  const rps = ["rock", "paper", "scissors"];

  const result = [];
  const getPermutation = (bucket) => {
    if (bucket.length === num) {
      result.push(bucket);
      return;
    }
    for (let i = 0; i < rps.length; ++i) {
      getPermutation(bucket.concat(rps[i]));
    }
  }

  if (num === undefined) num = 3;
  getPermutation([]);

  return result;
}