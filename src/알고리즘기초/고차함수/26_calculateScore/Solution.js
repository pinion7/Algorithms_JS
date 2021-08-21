function calculateScore(records, value) {
  if (records.length === 0) return 0;
  let newArr = records.filter((el) => el.animal === value)
  return newArr.reduce((acc, cur) => {
    return acc + cur.score;
    }, 0);
}





