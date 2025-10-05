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

// String Methods ---
// length --
let word = "abcdefghijklmnopqrstuvwxyz";
let len = word.length;
console.log(len);
let char = word.charAt(0);
console.log(char);
let charCode = word.charCodeAt(0);
console.log(charCode);
let letter = word.at(2);
// let letter = word[2]
console.log(letter);

// concatinating string --
let w1 = "hello";
let w2 = "world!";
let greet = w1.concat(" ", w2);
console.log(greet);

// Extracting string parts ---
// slice(start, end)
// substring(start, end)
// substr(start, length)

let text6 = "Apple, Banana, Kiwi";
// let part = text6.slice(7, 13);
// let part = text6.slice(7);
let part = text6.slice(-12);
let part1 = text6.substring(7, 13);
console.log(part1);

// toUpperCase --
let part2 = text6.toUpperCase();
console.log(part2);
// toLower case --
let part3 = text6.toLowerCase();
console.log(part3);

// Lone Surrogates
// A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.

let result = text.isWellFormed();
console.log(result);

// trim --
let text7 = "    Hello     world   ";
let trim = text7.trim();
console.log(trim);

// trimStart
// trimEnd

// padStart
let num = "8"; //text
let padStart = num.padStart(4, "0");
console.log(padStart);
// padEnd
let padEnd = num.padEnd(4, "0");
console.log(padEnd);

let numb = 6; //number
let nStr = numb.toString();
let pad = nStr.padStart(3, "x");
console.log(pad);

let res = text.repeat(2);
let repeat = text.repeat(4);
console.log(res);
console.log(repeat);

// Replacing string content ---
let newTxt = text.replace("Doe", "Thorve");
console.log(newTxt);

let website = "Please visit MicRosOft!";
let newWeb = website.replace(/MICROSOFT/i, "W3Schools"); //flag /iinsensitive
console.log(newWeb);

// flag /g global match
let pets = "I love cats. Cats are very easy to love. Cats are very popular.";
pets = pets.replaceAll("cats", "dogs");
pets = pets.replaceAll("Cats", "Dogs");
console.log(pets);

// string split ---
const myArr = alphabets.split("");
alphabets = "";
for (let i = 0; i < myArr.length; i++) {
  alphabets += myArr[i] + "\n";
}
console.log(alphabets);

// string indexOf()----
let index = pets.indexOf("easy");
console.log(index);

let lastIndex = pets.lastIndexOf("easy");
console.log(lastIndex);

let search = pets.search("dogs");
console.log(search);

// string match()
let spain = "The rain in SPAIN stays mainly in the plain";
// const arr = spain.match("ain");
// const arr = spain.match(/ain/gi);
const arr = spain.matchAll("ain");
console.log(Array.from(arr));

// string include()
console.log(spain.includes('rain'));

// startWith()
// endsWith()
