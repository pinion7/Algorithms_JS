function getLastElementOfProperty(obj, property) {
  arrProperty = obj[property];
  if (Array.isArray(arrProperty)) {
    return arrProperty[arrProperty.length - 1];
  }
}






