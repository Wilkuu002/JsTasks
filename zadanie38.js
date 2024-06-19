function reverseWords(str){
    let slowa = str.split(' ')
    let noweSlowa =[]
    for(let i=0;i<slowa.length;i++)
    {
        noweSlowa[i]=slowa[i].split('').reverse().join('')
    }
    return noweSlowa.join(' ')
}
console.log(reverseWords('Adam ma psa'))