function isValidWalk(walk) {
    let x=0
    let y =0
    if(walk.length !== 10) return false
    for (let i=0;i<walk.length;i++)
    {
        switch (walk[i]) {
            case 'n':
                x++;
                break
            case 's':
                x--
                break
            case 'e':
                y++
                break
            case 'w':
                y--
                break
        }
    }
    if(x===0 && y===0) return true
}