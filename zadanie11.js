function findUniq(tablica) {
  // Sortuj tablicę, aby identyfikować różnice między liczbami
  tablica.sort(function (a, b) {
    return a - b;
  });

  // Porównaj pierwszy i drugi element, aby znaleźć unikatową wartość
  if (tablica[0] !== tablica[1]) {
    return tablica[0];
  } else {
    return tablica[tablica.length - 1];
  }
}
