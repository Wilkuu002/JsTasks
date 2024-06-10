function allNines(x) {

    if(x%2n===0n || x%5n ===0n)
    {
        return -1n
    }

    let n=9n

    while (n % x!== 0n)
    {
        n=BigInt(n+'9')
    }
    return n/x
}

console.log(allNines(31n));
