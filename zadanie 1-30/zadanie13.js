function add(a, b) {
  let wynik = "";
  let przeniesienie = 0;

  const maksDlugosc = Math.max(a.length, b.length);
  a = a.padStart(maksDlugosc, "0");
  b = b.padStart(maksDlugosc, "0");

  for (let i = maksDlugosc - 1; i >= 0; i--) {
    const cyfraA = parseInt(a[i]);
    const cyfraB = parseInt(b[i]);

    const suma = cyfraA + cyfraB + przeniesienie;
    wynik = (suma % 10) + wynik;
    przeniesienie = Math.floor(suma / 10);
  }
  if (przeniesienie > 0) {
    wynik = przeniesienie + wynik;
  }

  return wynik;
}
