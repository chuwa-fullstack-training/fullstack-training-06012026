// 1. use `promise` to print 1, 2, 3 in every 1 second
function printNumber(i){
  return new Promise((resolve) =>{
    setTimeout(()=>{
      console.log(i)
      resolve();
    },1000)
  })
}

function print() {
  // your code here
  return printNumber(1)
  .then(() => printNumber(2))
  .then(() => printNumber(3));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  nums.reduce((promise, i) =>{
    return promise.then(() => printNumber(i));
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

function printLight(light){
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(light);
      resolve();
    }, 1000)
  })
}

const lights = ['red', 'green', 'yellow'];
function trafficLight(lights) {
  // your code here
  lights.reduce((promise, str) => {
    return promise.then(() => printLight(str));
  }, Promise.resolve()).then(() => trafficLight(lights));

}
