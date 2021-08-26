function sumTo(num) {
  if (num <= 1) return num;
  return num + sumTo(num - 1);
}



