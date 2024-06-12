function highAndLow(numbers) {
  const tablica = numbers.split(" ").map((str) => parseInt(str, 10));
  let najwieksza = tablica[0];
  let najmniejsza = tablica[0];
  for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] > najwieksza) {
      najwieksza = tablica[i];
    } else if (tablica[i] < najmniejsza) {
      najmniejsza = tablica[i];
    }
  }
  return `${najwieksza} ${najmniejsza}`;
}
