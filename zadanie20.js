function isPangram(string){
    let czyGit = false
    let slowo = string.split('').length
    let alfabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if(slowo.length<alfabet.length)
    {return false}
    else {
        for (let i = 0; i < alfabet.length; i++) {
            if(string.toLowerCase().includes(alfabet[i]))
            {
                czyGit = true;
            }
            else{return false}
        }
        return czyGit
    }
}