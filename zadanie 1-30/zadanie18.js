const judgeCircle = function(moves)
{
    let X=0
    let Y =0
    for(let i=0;i<moves.length;i++)
    {
        switch(moves[i])
        {
            case'U':
                Y++
                break;
            case'D':
                Y--;
                break
            case'R':
                X++
                break;
            case 'L':
                X--;
                break;
        }
    }
    return X===0 && Y ===0

};
const moves1 = "RLUDDD"
const moves2 = "LLRR"
console.log(judgeCircle(moves1))
console.log(judgeCircle(moves2))