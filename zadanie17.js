function generateHashtag(str) {
  let slowa = str.split(" ");
  let wynik = "#";
  let nowaTablica = slowa.map(function (x) {
    for (let j = 0; j < x.length; j++) {
      if (j === 0) {
        wynik += x[j].toUpperCase();
      } else {
        wynik += x[j];
      }
    }
  });
  if (wynik.length > 140 || str == 0) {
    return false;
  } else {
    return wynik;
  }
}
