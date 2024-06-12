function sortArray(array) {
    let nieparzysteTablica = array
        .map((value,index)=>({value,index}))
        .filter(item => item.value % 2 !== 0)
        .sort((a,b)=>a.value-b.value)
    let idexNieparzysta=0


    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2!==0){
            array[i]=nieparzysteTablica[idexNieparzysta].value
            idexNieparzysta++
        }
    }
    return array
}

console.log(sortArray([-2, -3, -5, 8, 3,1, 4]))