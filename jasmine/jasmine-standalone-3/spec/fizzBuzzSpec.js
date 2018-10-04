describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should return fizz when passed 3", function() {
    expect(fizzBuzz.play(3)).toEqual("fizz");
  });

  it("should return buzz when passed 5", function() {
    expect(fizzBuzz.play(5)).toEqual("buzz");
  });

  it("should return fizzbuzz when passed 15", function() {
    expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
  });

  it("should return number in other cases", function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  });

});

// describe("FizzBuzz", function() {
//
//   it("should return fizz when passed 3", function() {
//     expect(FizzBuzz(3)).toEqual("fizz");
//   });
//
//   it("should return buzz when passed 5", function() {
//     expect(FizzBuzz(5)).toEqual("buzz");
//   });
//
//   it("should return fizzbuzz when passed 15", function() {
//     expect(FizzBuzz(15)).toEqual("fizzbuzz");
//   });
//
//   it("should return number in other cases", function() {
//     expect(FizzBuzz(1)).toEqual(1);
//   });
//
// });
