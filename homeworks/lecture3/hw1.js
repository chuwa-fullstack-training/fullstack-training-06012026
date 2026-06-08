/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let res = []
    let count = 0

    for(let b = 0; b < 20; b++){
        for(let c = 0; c < 4; c++){
            for(let d = 0; d < 2; d++){
                if(4*b + 24*c + 49*d === 52){
                    let a = 48 - b - c -d;
                    res.push([a, b, c, d])
                    count ++;
                    if(count === 2){
                        return res;
                    }
                }

            }
        }
    }

    return [];
}
console.log(pickCoins())