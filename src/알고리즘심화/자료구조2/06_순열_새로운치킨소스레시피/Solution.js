function newChickenRecipe(stuffArr, choiceNum) {
  // 우선 000이 3회연속나오는 요소를 제거해준다.
  // 그리고 choiceNum보다 배열의 길이가 작으면 빈배열 리턴
  const newStuff = stuffArr.filter(el => {
    if (el.toString().includes('000')) return false;
    return true;
  }).sort((a, b) => a - b);

  if (newStuff.length < choiceNum) return [];

  const result = [];
  const getPermutation = (arr, bucket) => {
    if (bucket.length === choiceNum) {
      result.push(bucket);
      return;
    }
    for (let i = 0; i < arr.length; ++i) {
      const temp = arr.slice();
      temp.splice(i, 1);
      getPermutation(temp, bucket.concat(arr[i]));
    }
  }

  getPermutation(newStuff, []);
  return result;
}