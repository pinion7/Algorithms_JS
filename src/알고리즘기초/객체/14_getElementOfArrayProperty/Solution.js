function getElementOfArrayProperty(obj, key, index) {
  let arrProperty = obj[key];
  if (Array.isArray(arrProperty)) {
    return arrProperty[index];
  }
  return undefined;
}





