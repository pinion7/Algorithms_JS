function getAllButLastElementOfProperty(obj, key) {
  arrProperty = obj[key];
  if (Array.isArray(arrProperty) && arrProperty.length !== 0) {
    return arrProperty.slice(0, arrProperty.length - 1);
  }
  return [];
}





