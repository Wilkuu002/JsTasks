function openOrSenior(data){
    let wynik =[]
    let j=0
    for(let i=0;i<data.length;i++)
    {
        if(data[i][j]>=55 && data[i][j+1]>7){
            wynik.push("Senior")
        }
        else {
            wynik.push("Open")
        }
    }
    return wynik
}