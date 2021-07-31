function isPythagorean(side1, side2, side3) {
  side1 = side1 * side1;
  side2 = side2 ** 2;
  side3 = Math.pow(side3, 2)

  if (side1 === side2 + side3) return true;
  if (side2 === side1 + side3) return true;
  if (side3 === side1 + side2) return true;
  return false;
}