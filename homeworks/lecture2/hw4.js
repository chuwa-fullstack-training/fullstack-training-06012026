// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);//7 var is confined to functional scope
}

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a); //5 var is confined to functional scope
}

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);//3 neither of var/let/const was used, a is a global variable

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();//6 var is delared at the very beginning and is confined to global scope

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);//7 variable shadowing, new var delaration covered the old one at the top
}

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);//1 function declaration is hoisted to the top within the function and is modifed to 10
//The variable declared at the top is not modified and is the only one accessible to the printing function.
