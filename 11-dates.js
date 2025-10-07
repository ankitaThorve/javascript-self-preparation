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
const dd = new Date(99, 11, 21)
console.log(dd)

// Date methods----
// toString(), toDateString(), toUTCString(), toISOString()