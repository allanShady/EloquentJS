function canYouSpotTheProblem() {
  "use strict";
  for (let counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined

"use strict";
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); // oops
console.log(name);
// → Ferdinan
