function classicMovies(arr, year) {
  let newArr = arr.filter((el => el.year <= year));
  return newArr.map((el) => el.title + ' by ' + el.director);
}





