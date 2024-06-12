function abbrevName(name){

let [imie,nazwisko] = name.split(" ")
    return imie[0].toUpperCase()+"."+nazwisko[0].toUpperCase()

}