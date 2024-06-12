function score(dice) {
  let licznik1 = 0;
  let licznik2 = 0;
  let licznik3 = 0;
  let licznik4 = 0;
  let licznik5 = 0;
  let licznik6 = 0;
  let wynik;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 1) {
      licznik1++;
    } else if (dice[i] === 5) {
      licznik5++;
    } else if (dice[i] === 2) {
      licznik2++;
    } else if (dice[i] === 3) {
      licznik3++;
    } else if (dice[i] === 4) {
      licznik4++;
    } else if (dice[i] === 6) {
      licznik6++;
    }
  }
  if (licznik1 >= 3) {
    wynik = wynik + 1000;
  } else if (licznik1 > 0 && licznik1 < 3) {
    wynik = wynik + 100;
  }
  if (licznik2 >= 3) {
    wynik = wynik + 200;
  }
  if (licznik3 >= 3) {
    wynik = wynik + 300;
  }
  if (licznik4 >= 3) {
    wynik = wynik + 400;
  }
  if (licznik5 >= 5) {
    wynik = wynik + 500;
  } else if (licznik5 > 0 && licznik5 < 5) {
    wynik = wynik + 50;
  }
  if (licznik6 >= 3) {
    wynik = wynik + 600;
  }
}
