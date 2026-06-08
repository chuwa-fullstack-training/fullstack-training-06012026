// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // approxy value of 0.3
//explanation: two float numbers, just perform normal arithmatic calculation, but most of the float numbers are stored as approxy values

console.log(0.1 + 0.2 == 0.3); //false
//explanation: the values are not exactly the same due to the approxy value of the results on the left

console.log(1 +  "2" + "2"); //“122”
//explanation: starting from the left, 1 is Number but "2" is not, so 1 is type coersion to "1", + performs concatenation
//then "12" + "2" are also concatenated

console.log(1 +  +"2" + "2");//“32”
//explanation: starting from the left, 1 is a Number, and unary + type convert "2" into Number 2. Summation of 1 and 2 is 3
//then "2" is not a Number, so + here type convert 3 into a "3", concatenate to "32"

console.log(1 +  -"1" + "2");//"02"
//explanation: starting from left, 1 is a Number and unary - turns "1" into Number -1, resulting in summation 0
//"2" is not a Number, so + here concatenate the results into "02"

console.log(+"1" +  "1" + "2");//"112"
//explanation: Despite the type conversion of the first "1" due to the unary +, the follwowing 2 string elements
//results in type conversion back to string and concatenate into "112"
console.log(Number("A"));
console.log(NaN - NaN);
console.log( "A" - "B" + "2");//“NaN2”
//explanation:oprand - can only be used for Numbers, so "A" and "B" are converted to Numbers, resulting in two NaN
//the difference between two NaN is still NaN, then + performs concatenation.

console.log( "A" - "B" + 2);//NaN
//explanation: oprand - can only be used for Numbers, so "A" and "B" are converted to Numbers, resulting in two NaN
//the difference between two NaN is still NaN. The summation of NaN and a number is still NaN

console.log("0 || 1 = "+(0 || 1));//"0 || 1 = 1"
//explanation: + performs concatenation here, （0｜｜1）returns the first truthy value which is Number 1

console.log("1 || 2 = "+(1 || 2));//"1 || 2 = 1"
//explanation: + performs concatenation here, （1｜｜2）returns the first truthy value which is Number 1

console.log("0 && 1 = "+(0 && 1)); // “0 && 1 = 0”
//explanation: + performs concatenation here, (0 && 1) returns the first falcy value or the last truthy value (if both are truthy)
// and the result is 0

console.log("1 && 2 = "+(1 && 2));//"1 && 2 = 2"
//explanation: + performs concatenation here, (1 && 2) returns the first falcy value or the last truthy value (if both are truthy)
// and the result is 2

console.log(false == '0')//true
// //explanation: double equal will lead to type conversion, both sides are converted into Number 0, so the result is true

console.log(false === '0')//false
// //explanation: triple equal performs both type and value check, which is diffrent in both cases, so the reuslt is false
