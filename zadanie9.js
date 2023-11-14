function findOdd(A) {
  let liczba = 0;
  for (let i = 0; i < A.length; i++) {
    let licznik = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        licznik++;
      }
    }
    if (licznik % 2 !== 0) {
      liczba = A[i];
    }
  }
  return liczba;
}
