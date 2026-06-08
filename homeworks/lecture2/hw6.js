// Algorithms
arr = [2, 3, 5, 1, 4, 8, 3];
// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  let maxNumber = list[0];
  for (let n in list) {
    if (list[n] > maxNumber) {
      maxNumber = list[n];
    }
  }
  return maxNumber;
}
function largestElement2(list) {
  // implement your code here
  return Math.max(...list);
}
console.log(largestElement(arr));
console.log(largestElement2(arr));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  let l = 0;
  let r = list.length - 1;
  while (l < r) {
    [list[l], list[r]] = [list[r], list[l]];
    l++;
    r--;
  }
  return list;
}
function reverseList2(list) {
  list.reverse;
  return list;
}
console.log(reverseList(arr));
console.log(reverseList2(arr));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  let count = 0;
  for (let n of list) {
    if (n == element) {
      count++;
    }
    if (count === 2) {
      return true;
    }
  }
  return false;
}
console.log(checkTwice(arr, 1));
