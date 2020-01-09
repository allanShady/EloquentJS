function canYouSpotTheProblem() {
  "use strict";
  for (let counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined

("use strict");
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); // oops
console.log(name);
// → Ferdinan

//Testing
function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
  else console.log("Passed.");
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

test("don't convert case-less characters", () => {
  return "ࢎ࠶߈ఆ௷".toUpperCase() == "ࢎ࠶߈ఆ௷";
});

//Debugging
function numberToString(n, base = 10) {
  let result = "",
    sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e…-3181.3
