// Arrays -----
// An Array is an object type designed for storing data collections.
// Key characteristics of JavaScript arrays are:
// Elements: An array is a list of values, known as elements.
// Ordered: Array elements are ordered based on their index.
// Zero indexed: The first element is at index 0, the second at index 1, and so on.
// Dynamic size: Arrays can grow or shrink as elements are added or removed.
// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

// syntax -> const array_name = [item1, item2, ...]
// declare array with const keyword
const cars = ["saab", "volvo", "bmw"]; // create a js array
console.log(cars);

const bikes = []; // create an empty array
bikes[0] = "yamaha";
bikes[1] = "honda";
bikes[2] = "royal enfield";

console.log(bikes);

const company = new Array("google", "meta", "microsoft"); //using js new keyword
console.log(company);

// Accessing array elements ---- Array indexes start with 0.
let carIndex = cars[0];
console.log(`The first car is '${carIndex}'`);

// Changing an array element ---
company[0] = "jp morgan";
console.log(company);

// Converting an array to string ---
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// Arrays are Objects ----------
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements".

const person = { firstName: "john", lastName: "doe", age: 46 };
console.log(person.firstName); //Objects use names to access its "members"

// the length property --- The length property is always one more than the highest array index.
let length = fruits.length;
console.log(length);

console.log(fruits[0]); //frist array element
console.log(fruits[fruits.length - 1]); //last array element

fruits.push("Lemon");
console.log(fruits.toString());
fruits[fruits.length] = "Papaya";
console.log(fruits.toString());
fruits[9] = "Pomogranate";
console.log(fruits);

// JS new Array()----
const points = new Array(40, 100, 420);
// const point = [60]
const point = new Array(60);
console.log(point[0]);

// How to Recognize an Array
console.log(Array.isArray(point)); //Array.isArray()
console.log(fruits instanceof Array); // instanceof operator

// Nested Arrays and Objects ------
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}

// console.log(x);

// Array Methods ----
let size = fruits.length;
console.log(size);

fruits.length = 5; //set length to array
console.log(fruits.toString());

let sec = fruits.at(2); //return indexed element | same as []
console.log(sec);

let join = fruits.join(" * "); //like toString(), but specify the separator
console.log(join);

console.log(fruits.pop()); //removes last element and returns the value that was "popped out"

let leng = fruits.push("Kiwi");
console.log(leng);
// console.log(fruits);
// restarted 01.11.2025
// back on 13.11.2025
// same on 28.11.2025
// 01.12.2025
fruits.shift(); //removes the first array element and "shifts" all other elements to a lower index
console.log(fruits);

let fShift = fruits.shift(); // returns the value that was "shifted out"
console.log(fShift);

fruits.unshift("guava"); //adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(fruits.unshift("guava")); //returns the new array length

// Array length ---
fruits[fruits.length] = "grapes";
console.log(fruits);

// delete fruits[0]; //Using delete() leaves undefined holes in the array
console.log(fruits[0]);

// Merging Arrays (Concatenating) -----

const myGirl = ["Hema", "Ankita", "Mudra"];
const myBoy = ["Shubham", "Tushar", "Mahesh"];
const myChildren = myGirl.concat(myBoy);
console.log(myChildren);

// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.

const allBoys = myBoy.concat("Rugwed");
console.log(allBoys);

// console.log(fruits.copyWithin(1, 0)); //copies array elements to another position in an array

// Note
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat(); //creates a new array with sub-array elements concatenated to a specified depth
console.log(newArr);

const newArr1 = newArr.flatMap((x) => [x * 10]); //first maps all elements of an array and then creates a new array by flattening the array
console.log(newArr1);

// Splicing and Slicing Arrays -------
fruits.splice(2, 0, "lemon", "kiwi"); //adds new items to an array
console.log(fruits);
const removed = fruits.splice(2, 2, "lemon", "kiwi");
console.log(removed);

fruits.splice(2, 0);
console.log(fruits);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

const oneM = months.slice(1); //slices out a piece of an array into a new array
console.log(oneM);

const citrus = fruits.slice(1, 5); //selects elements from the start argument, and up to (but not including) the end argument
console.log(citrus);

const rest = fruits.slice(3); //slices out the rest of the array
console.log(rest);

// Automatic toString() ----
const myList = fruits.toString();
console.log(myList);

// JS Array Search Methods-----
// The indexOf() method searches an array for an element value and returns its position.
let position = fruits.indexOf("Mango") + 1;
// let position = fruits.indexOf(); //Array.indexOf() returns -1 if the item is not found.
console.log(`Mango is found in position ${position}`);

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
const frtPlate = ["Apple", "Mango", "Apple", "Papaya", "Kiwi", "Apple"];
let platePosition = frtPlate.lastIndexOf("Apple") + 1;
console.log(platePosition);

// Array.includes() allows us to check if an element is present in an array (including NaN, unlike indexOf)
let isMango = frtPlate.includes("Mango");
console.log(isMango);

// find() method returns the value of the first array element that passes a test function
const num = [4, 9, 12, 89, 43, 11, 8];
let first = num.find(myFunction);
console.log(first);
function myFunction(value, index, array) {
  return value > 18;
}

// findIndex() method returns the index of the first array element that passes a test function.
let firstIndex = num.findIndex(myFunction);
console.log(`First number over 18 has index ${firstIndex}`);
function myFunction(value, index, array) {
  return value > 18;
}

// findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log(`The last temperature over 40 was ${high}`);

// findLastIndex() method finds the index of the last element that satisfies a condition
let pos = temp.findLastIndex((x) => x > 40);
console.log(`The last temperature over 40 was in position ${pos}`);

// JS Array Sort --------------------
// sort() method sorts an array alphabetically
frtPlate.sort();
console.log(`Alphabetically array: ${frtPlate}`);

// reverse() method reverses the elements in an array
frtPlate.reverse();
console.log(`Reverse arrays: ${frtPlate}`);

// By combining sort() and reverse(),can sort an array in descending order
const veggies = ["spinach", "coriander", "bringal", "potato", "capsicum"];
veggies.sort(); // First sort the array
veggies.reverse(); // Then reverse it
console.log(`First sort then reverse: ${veggies}`);

// toSorted() method as a safe way to sort an array without altering the original array
const sortedMonths = months.toSorted();
console.log(`Months sorted alphabetically: ${sortedMonths}`);

// toReversed() method as a safe way to reverse an array without altering the original array
const reversedMonths = months.toReversed();
console.log(`Months reversed: ${reversedMonths}`);

// Numeric Sort ------------------------
const pnt = [40, 100, 1, 5, 25, 10];
pnt.sort(function (a, b) {
  return a - b;
});
console.log(`by providing a compare function: ${pnt}`);

// sort an array descending
let desc = pnt.sort(function (a, b) {
  return b - a;
});
console.log(`Descending array: ${desc}`);

// Sorting an Array in Random Order
let randomOrder = pnt.sort(function () {
  return 0.5 - Math.random();
});
console.log(`Random Order: ${randomOrder}`);

// The Fisher Yates Method ---------------
function myFunction() {
  for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  console.log(points);
}

// Find Min or Max with sort() --------------------
const Min = [40, 100, 1, 5, 25, 10];
Min.sort(function (a, b) {
  return a - b;
});
console.log(`Min value is: ${Min[0]}`);

const Max = [40, 100, 1, 5, 25, 10];
Max.sort(function (a, b) {
  return b - a;
});
console.log(`Max value is: ${Max[0]}`);

// Math.min() on an Array ---
const mathMin = [40, 100, 1, 5, 25, 10];
console.log(myArrayMin(mathMin));

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

// Math.max() on an Array ---
const mathMax = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(mathMax));

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3)
// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3)

// Sorting Object Arrays -----
const carModel = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

displayCars();
carModel.sort(function (a, b) {
  return a.year - b.year;
});

function displayCars() {
  console.log(
    `${carModel[0].type} ${carModel[0].year}\n${carModel[1].type} ${carModel[1].year}\n${carModel[2].type} ${carModel[2].year}`
  );
}

// Js Array Iteration -----
// forEach() method calls a function (a callback function) once for each array element
const num1 = [45, 4, 9, 16, 25];
let txt = "";
num1.forEach(myfun);
console.log(txt);
function myfun(value, index, array) {
  txt += value + "\n";
}

// map() method creates a new array by performing a function on each array element
// When a callback function uses only the value parameter, the index and array parameters can be omitted
const number1 = [45, 4, 9, 16, 25];
const number2 = number1.map(mapFunc);
console.log(number2);
function mapFunc(value) {
  return value * 2; //multiplies each array value by 2
}

// flatMap() method first maps all elements of an array and then creates a new array by flattening the array
const myArray = [1, 2, 3, 4, 5, 6];
const newArray = myArray.flatMap((x) => [x, x * 10]);
console.log(newArray);

// filter() method creates a new array with array elements that pass a test
const over18 = number1.filter(above18);
console.log(over18);
function above18(value) {
  return value > 18;
}

// reduce() method runs a function on each array element to produce a single value
let sum = number1.reduce(myReduce);
console.log(sum);
function myReduce(total, value) {
  return total + value;
}

// can accept an initial value
let sumInt = number1.reduce(myReduce, 100);
console.log(sumInt);
function myReduce(total, value) {
  return total + value;
}

// reduceRight() works from right-to-left in the array same as reduce()
let sumRight = number1.reduceRight(reduceRight);
console.log(`right to left: ${sumRight}`);
function reduceRight(total, value) {
  return total + value;
}

// every() method checks if all array values pass a test
// const allNum = [23, 56,45,76,89,93,45,19]
let allOver18 = number1.every(all18Func);
console.log(allOver18);
function all18Func(value, index, array) {
  return value > 18;
}

// some() method checks if some array values pass a test
let someOver18 = number1.some(mySome);
console.log(someOver18);
function mySome(value, index, array) {
  return value > 18;
}
