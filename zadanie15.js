function rgb(r, g, b) {
  let r16 = r.toString(16);
  let g16 = g.toString(16);
  let b16 = b.toString(16);
  tablica = [r16, g16, b16];
  for (let i = 0; i < tablica.length; i++) {
    if (parseInt(tablica[i], 16) < 0) {
      tablica[i] = "00";
    } else if (parseInt(tablica[i], 16) > "255") {
      tablica[i] = "ff";
    } else if (tablica[i].length < 2) {
      tablica[i] = "0" + tablica[i];
    }
  }
  return tablica.join("").toUpperCase();
}
