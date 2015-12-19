var fib1 = 1;
var fib2 = 2;
var store = 0;
var answer = 0;
while (fib1 && fib2 < 4000000) {
  if (fib2 % 2 === 0) {
    answer += fib2;
  }
  store = fib1;
  fib1 = fib2;
  fib2 = fib2 + store;
}
console.log("Sum of even values: " + answer);