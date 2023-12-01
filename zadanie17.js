function generateHashtag(str) {
  let slowa = str.split(" ");
  let wynik = "#";
  if (slowa > 140 || str === 0) {
    return false;
  }
  for (let i = 0; i < slowa.count; i++) {
    for (let j = 0; j < slowa[j].lenght; j++) {
      if (j === 0) {
        wynik += slowa[j].toUpperCase();
      } else {
        wynik += slowa[j];
      }
    }
  }
  return wynik;
}
