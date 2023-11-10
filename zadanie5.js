String.prototype.toJadenCase = function () {
  return this.replace(/\b\w/g, (char, index) => {
    return index === 0 || this[index - 1] === " " ? char.toUpperCase() : char;
  });
};
