/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  const coins = 48;
  const total = 100;
  let count = 0;
  for (let a = 0; a < Math.floor(coins / 1) + 1; a++) {
    for (let b = 0; b < Math.floor(coins / 5) + 1; b++) {
      for (let c = 0; c < Math.floor(coins / 25) + 1; c++) {
        for (let d = 0; d < Math.floor(coins / 50) + 1; d++) {
          if (
            a + 5 * b + 25 * c + 50 * d === total &&
            a + b + c + d === coins
          ) {
            console.log(a, b, c, d);
            count++;
          }
          if (count == 2) return;
        }
      }
    }
  }
}
