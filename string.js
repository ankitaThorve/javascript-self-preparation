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