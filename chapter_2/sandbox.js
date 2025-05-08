// //ctrl foward slash for shorthand comment
// //internet 11 does not support modern javascript

// //variables

// //Naming conventions: camelCase, no spaces, cannot start with a number, let and const cannot be used (reserved keywords)
// // let is the new way of writing variables
// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// //const is used for variables that will not change
// const points = 100;
// console.log(points);

// //old way of delcaring variables
// var score = 75;
// console.log(score);



// //STRINGS

// //single or double quotes to make it a string
// console.log("hello world");
// let email = "rlontoc39@academic.rrc.ca"
// console.log(email);

// //string concatenation
// let firstName = "Brandon";
// let lastName = "Sanderson";

// let fullName = firstName + " " + lastName;

// console.log(fullName);

// //getting characters
// console.log(fullName[0]);

// //string length
// console.log(fullName.length);

// //string methods
// //these methods do not alter the original value
// console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result, fullName);

// //value passed into method called a arguement or parameter
// let index = email.indexOf("@");
// console.log(index);

//common string methods
//let email = "mario@thenetninja.co.uk";

//finds the postition of the last instance of character
//let result = email.lastIndexOf("n");

//first arguement where we want to slice from, second where you want to slice to
//let result = email.slice(0,10);

//makes a substring from full string.
// first arguement where you want to start from, second how many characters you want to get
//let result = email.substr(4,10);

//let result = email.replace("m", "w");

//replaces the first character it comes across
//let result = email.replace("n", "w");

//console.log(result);

// //NUMBERS
let radius = 10;
const pi = 3.14;

//math operators +, -, *, /, **(to the power of), %
// console.log(10/2);

// let result = radius % 3;
// console.log(result);
//let result = pi * radius**2;

//order of operations - BEDMAS
//let result = 5 * (10-3)**2;
//console.log(result);

let likes = 10;
// likes = likes + 1;
// same as likes = likes + 1;
// likes++;

// likes += 10;
// likes -=5;
// likes *=2;
//likes /=2;

//console.log(likes)

// NaN - not a number (tried to do a calculation that did not reult in a number)
// console.log(5 * "hello");

// let result = "the blog has " + likes + " likes";
// console.log(result);