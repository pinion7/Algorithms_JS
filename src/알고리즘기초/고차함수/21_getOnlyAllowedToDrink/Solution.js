function getOnlyAllowedToDrink(arr) {
  if (arr.length === 0) return [];
  return arr.filter((el) => el.age >= 18)
            .map((el) => el.name);
}






