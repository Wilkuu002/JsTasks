// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    let ilePuszek = Math.floor(bonus/price)
    let ilePotrzeba =1
    let ilePieter =0
    for(let i=1;ilePuszek>=ilePotrzeba;i++)
    {
        ilePotrzeba = i*i
        if(i===1) {
            ilePuszek -= ilePotrzeba
            ilePieter ++
            ilePotrzeba = (i+1)*(i+1)
        }
        else
        {
            ilePuszek -= ilePotrzeba
            ilePieter ++
            ilePotrzeba = (i+1)*(i+1)
        }

    }
    return ilePieter
}
// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    var beers = Math.floor(bonus / price), levels = 0;
    while(beers >= ++levels * levels) {
        beers -= levels * levels;
    }
    return levels - 1;
}