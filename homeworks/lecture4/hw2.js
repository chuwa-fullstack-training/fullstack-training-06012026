// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const arr = [1, 2, 3];
const newArr = arr.map(num => num * 2);
console.log(newArr);

// 2. Given an array of numbers, return an array of numbers that are even.
const even = arr.filter(num => num % 2 !==0);
console.log(even);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverse = str => str.split("").filter(char => /[a-zA-Z]/.test(char)).reduce((acc, char) => char + acc, "");
console.log(reverse("Hello World"))

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flatten = arr => arr.reduce((acc, cur) => {
    if(Array.isArray(cur))return[...acc, ...flatten(cur)];
    else{
        return [...acc, cur];
    }
}, []);

console.log(flatten([[0, 1], [2, 3], [4, [5, 6]]]))