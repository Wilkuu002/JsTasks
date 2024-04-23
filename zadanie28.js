function getSum(a, b)
{
    let suma =0
    let start =a
    let end =b


    if (a > b) {
        start = b;
        end = a;
    }
        for(let i =start;i<=Math.abs(end);i++)
        {
            suma+=i
        }
    return suma
}