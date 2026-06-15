/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let parts = num.toString().split('.');
  let intpart = parts[0];
  

  let reversed = intpart.split('').reverse();
  for(let i = 3; i < intpart.length; i += 4){
    reversed.splice(i, 0, ',');
  }
  let res = reversed.reverse().join('');

  return parts[1]? res + '.' + parts[1]: res;
}
