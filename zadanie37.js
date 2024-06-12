function tribonacci(signature,n){
    let [pierwsza, druga, trzecia] = signature;

    let wynik =[...signature]
    for(let i=3;i<n;i++)
    {
        let liczba = pierwsza+druga+trzecia
        wynik.push(liczba)
        pierwsza =druga
        druga=trzecia
        trzecia=liczba
    }
    if(n===0)
    {
        return []
    }
    if(n<=3)
    {
        return [signature[n]]
    }
    return wynik
}