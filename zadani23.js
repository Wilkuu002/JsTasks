function repeatStr (n, s) {
    let slowo = []
    for(let i=0;i<n;i++){
        slowo =[...slowo,s]
    }
    return slowo.join('');
}