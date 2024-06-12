function descendingOrder(n){
    let liczba =n.toString().split('')
    let posortowanaLiczba = liczba.sort((a, b) => b - a);
    let wynik = parseInt(posortowanaLiczba.join(''))
    return wynik
}