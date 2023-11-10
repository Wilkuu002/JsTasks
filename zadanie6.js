function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((number) => number ** 2)
      .join("")
  );
}
