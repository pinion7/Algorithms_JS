function daysInMonth(month) {
  if (month === 2) {
    return 28;
  }
  else if (month === 4 || month === 6 || month === 9 || month === 11)  {
    return 30;
  }
  return 31;
}

