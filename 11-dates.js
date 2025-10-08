// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

// ----------------------------------------------------------------
// current date and time
// const d =  new Date()
const d = new Date("October 13, 2016 11:13:00"); //date string
console.log(d);

// Note --- JavaScript counts months from 0 to 11: January = 0, December = 11.

// Previous Century
const dd = new Date(99, 11, 21);
console.log(dd);

// Date methods----
// toString(), toDateString(), toUTCString(), toISOString()

const date = new Date("2025-07-19");
console.log(date);

// JS Get Date method- -
console.log(d.getFullYear()); //4 digit number
console.log(d.getMonth()); // a number (0-11)

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[d.getMonth()];
console.log(month);

console.log(d.getDate()); //a number (1-31)
console.log(d.getHours()); // a number (0-23)
console.log(d.getMinutes()) // 0-59
console.log(d.getSeconds()) // 0-59
console.log(d.getMilliseconds()) // 0-999
console.log(d.getDay())// 0-6
console.log(d.getTime())

let ms = Date.now()
console.log(ms)

// Calculate the number of years since January 1, 1970:
// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Date.now() with a year
let years = Math.round(Date.now() / year);
console.log(years)

let diff = d.getTimezoneOffset()
console.log(diff)