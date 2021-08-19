function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  let newArr = obj[property];
    if (Array.isArray(newArr) === false) {
      return [];
    }
    return newArr.map((el) => {
      return square(el);
    })
}





