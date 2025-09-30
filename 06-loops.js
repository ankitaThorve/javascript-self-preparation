// for loops -----
let text = "";
for (let i = 0; i < 5; i++) {
  text += i + "\n";
}
console.log(text);

const cars = ["bmw", "saab", "fort", "volvo"];
let len = cars.length;

let q = "";
for (i = 0; i < len; i++) {
  q += cars[i] + "\n";
}
console.log(q);

// while loop -----
let text1 = "";
let j = 0;
while (j < 10) {
  text1 += "The number is " + j + "\n";
  j++;
}
console.log(text1);

const car = ["bmw", "saab", "volvo", "fort"];
let g = 0;
let text3 = "";
while (car[g]) {
  text3 += "while loop " + car[g] + "\n";
  g++;
}
console.log(text3);

// do while loop -----
let text2 = "";
let d = 0;

do {
  text2 += "The number is : " + d + "\n";
  d++;
} while (d < 10);
console.log(text2);

// Break in loops ----
let text4 = "";
for (let o = 0; o < 10; o++) {
  if (o === 3) {
    break;
  }
  text4 += "Number = " + o + "\n";
}
console.log(text4);
