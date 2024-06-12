var countBits = function (n) {
  const tablica = n.toString(2).split("");
  var liczba = 0;
  tablica.forEach((element) => {
    if (element === 1) {
      liczba++;
    }
  });
  return liczba;
};
