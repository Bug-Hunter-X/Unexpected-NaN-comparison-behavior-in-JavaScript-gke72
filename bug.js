function foo(a, b) {
  if (a === b) {
    return true; //This will cause the bug when a and b are NaN
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); //false
console.log(NaN === NaN); //false