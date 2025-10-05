// Strings are for storing text
let text = "John Doe";

// Quotes inside quotes
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

// Template Strings ---
// enclosed with backticks
let tempStr = `He's often called "Johnny"`;

// String length ---
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = alphabets.length;
console.log(length);

// Escape characters ---
// \' ' Single quote
// \" " Double quote
// \\ \ Backslash

let text2 = 'We are the so-called "Vikings" from the north.';
let text3 = "It's alright";
let text4 = "The character \\ is called backslash.";
console.log(text2);
console.log(text3);
console.log(text4);

// \b Backspace
// \f Form Feed
// \n New line
// \r Carriage return
// \t Horizontal Tabulator
// \v Vertical Tabulator

// The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

// Templates allow multiline strings:
let text5 = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text5);

// JS Strings as Object ---
let x = "Ankita";
console.log(typeof x);
let y = new String("Ankita");
console.log(typeof y);

// Comparing two JavaScript objects always returns false.

// JS String Templates ----
// String Templates
// Template Strings
// Template Literals
// Beloved child has many names

// Interpolation ----
let firstName = "Ankita";
let lastName = "Thorve";
let fullName = `Welcome ${firstName}, ${lastName}!`;
console.log(fullName);

// Expression Substitution ---
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// HTML Templates ----
let header = "Template String";
let tags = ["template string", "js", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
console.log(html);


