function ipsBetween(start, end) {
  let podzielonyStart = start.split(".");
  let podzielonyEnd = end.split(".");
  let liczba1 = 0;
  let liczba2 = 0;

  for (let i = podzielonyEnd.length - 1; 0 <= i; i--) {
    if (i === podzielonyEnd.length - 1) {
      liczba1 += parseInt(podzielonyStart[i]);
      liczba2 += parseInt(podzielonyEnd[i]);
    } else {
      liczba1 +=
        parseInt(podzielonyStart[i]) *
        Math.pow(256, podzielonyEnd.length - 1 - i);
      liczba2 +=
        parseInt(podzielonyEnd[i]) *
        Math.pow(256, podzielonyEnd.length - 1 - i);
    }
  }
  let wynik = liczba2 - liczba1;
  return wynik;
}
