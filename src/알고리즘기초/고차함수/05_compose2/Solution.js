function compose2(func1, func2) {
  const newFunc = (num) => func1(func2(num));
  return newFunc;
}





