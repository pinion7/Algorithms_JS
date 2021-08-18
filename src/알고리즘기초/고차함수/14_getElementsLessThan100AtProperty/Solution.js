function lessThan100(number) {
  if (typeof number === 'number') {
    return number < 100;
  }
}

function getElementsLessThan100AtProperty(obj, property) {
  if (Array.isArray(obj[property])) {
    return obj[property].filter(el => lessThan100(el));
  }
  return [];
}





