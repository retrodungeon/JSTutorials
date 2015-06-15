function powersOf(x) {
  return function(y){
    return Math.pow(x, y);
  };
}

var powersOfTwo = powersOf(2);

console.log(powersOfTwo(2));
console.log(powersOfTwo(7));
console.log(powersOfTwo(10));

var powersOfTen = powersOf(10);

console.log(powersOfTen(1));
console.log(powersOfTen(2));
console.log(powersOfTen(13));

