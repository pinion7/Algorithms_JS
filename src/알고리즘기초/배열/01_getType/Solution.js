function getType(anything) {
  if (Array.isArray(anything)) return 'array';
  else if (anything === null) return 'null';
  return typeof anything;
}




