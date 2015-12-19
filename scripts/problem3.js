var array = [];
var input = 2018514751;
for(var i = 1; i <= input; i++) {
  if (input % i === 0 && (i < 3 || (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0 && i % 13 !== 0))) {
    array[array.length] = i;
  }
}
console.log(array);
var n = array.length - 1;
//console.log("n: " + n);
var test = 13;
var prime = false;
while(n >= 0 && prime === false) {
  var factor = array[n];
//  console.log("f: " + factor);
  if (factor % test !== 0 && test < factor-2){
    test += 2;
//    console.log("test: " + test);
  }
  else if (factor % test === 0) {
    n--;
    test = 13;
//    console.log("n1: " + n);    
  }
  else if (factor % test !== 0 && test >= factor){
    n--;
    test = 13;
//    console.log("n2: " + n);
  }
  else {
    console.log("Highest prime factor: " + factor);
    prime = true;
  }
}