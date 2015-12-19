var result = 0;
for(var i=0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    result = result + i;
  }
}
console.log("Sum of multiples: " + result);