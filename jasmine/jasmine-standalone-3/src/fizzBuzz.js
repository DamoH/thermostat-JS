// *** this is JS "class" function ***...
function FizzBuzz() {}
// this is the "method" function within....
FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(number, 3) && this._isDivisibleBy(number, 5)) {
    return "fizzbuzz";
  } else if (this._isDivisibleBy(number, 3)) {
    return "fizz";
  } else if (this._isDivisibleBy(number, 5)) {
    return "buzz";
  } else {
    return number;
  }
};

// *** this is a private method ***...
FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return number % divisor === 0;
};

/* to play in Chrome dev tool..
var fb = new FizzBuzz();
fb.play(3);   etc
*/

// *** just a method ***....
// function FizzBuzz(number) {
//
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "fizzbuzz";
//   } else if (number % 3 === 0) {
//     return "fizz";
//   }  else if (number % 5 === 0) {
//     return "buzz";
//   } else {
//     return number;
//   }
//
// };
