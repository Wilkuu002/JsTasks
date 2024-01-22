function findNextSquare(sq) {
    let liczba = Math.sqrt(sq)
    if(liczba%1===0)
    {return ((liczba+1)**2)}
    else{return -1;}
}