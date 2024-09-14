let isOpen = false;

console.log(typeof isOpen);

let a = 10;
let b = 20;
console.log(a);
console.log(b);

a += 10;
b *= 2;
console.log(a);
console.log(b);

// vb == and === different
console.log("5" >= 3);

/*
isOpen
? console.log("the condition is true")
: console.log("the condition is false")

alert("usage of alert")

let the_number = prompt("Enter a number" , "Type a number here...")
alert(`Given number is ${the_number}`) // to use ${} `is necessary (option + , = `)

let agreement_policy = confirm("Are you agree with the policy?")
console.log(agreement_policy)
*/

let date = new Date();
console.log(date);

let year = date.getFullYear(); // there are much more specified method
let day = date.getDay();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function printTimeWithDelay() {
  for (let index = 0; index < 9; index++) {
    await sleep(2000);
    let date = new Date();
    console.log(date);
  }
}

printTimeWithDelay();

console.log("loop finished");

console.log(date.getDay());

function abc() {
  let height = prompt("Give the height of the triangle");
  let width = prompt("Give the height of the width");
  alert(`are of the triangle is ${(height * width) / 2}`);
}

abc();