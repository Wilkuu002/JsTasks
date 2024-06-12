function past(h, m, s){
    let sek = 1000
    let min = sek *60
    let godz=min * 60
    return s*sek + m* min + h*godz
}