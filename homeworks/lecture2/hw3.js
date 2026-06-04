// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.1 + 0.2 == 0.3); //false

console.log(1 + "2" + "2"); //"122"

// 一元 + / -（前面没有数字，只有一个操作数）
// +"2"     // → 2       （字符串 "2" 变成数字 2）
// -"1"     // → -1      （字符串 "1" 变成数字 -1）
// +"abc"   // → NaN     （转不了就是 NaN）
//二元 +（两边都有操作数）
//1 + "2"   // → "12"    （数字 1 变成 "1"，拼接）
//"a" + "b" // → "ab"
//二元 -（两边都有操作数）:- 没有拼接功能，只能做数学运算，所以会强制把两边都转成数字：
// "5" - "2"   // → 3      （都转成数字）
// "5" - 2     // → 3
// "A" - "B"   // → NaN    （转不了）

console.log(1 + +"2" + "2"); //"32"
console.log(+"2"); //2

console.log(1 + -"1" + "2"); //"02"

console.log(+"1" + "1" + "2"); //"112"

console.log("A" - "B" + "2"); //NaN2

console.log("A" - "B" + 2); //NaN2

// || return the first truthy value, if all thuthy return the last
// && return the first falsy value, if all falsy return the last
// falsy values in js: false, 0, "", null, undefined, NaN
console.log("0 || 1 = " + (0 || 1)); //"0 || 1 = 1"

console.log("1 || 2 = " + (1 || 2)); //"1 || 2 = 1"

console.log("0 && 1 = " + (0 && 1)); //"0 && 1 = 0"

console.log("1 && 2 = " + (1 && 2)); //"1 && 2 = 2"

console.log(false == "0"); //true

console.log(false === "0"); //false
