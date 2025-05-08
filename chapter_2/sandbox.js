//ctrl foward slash for shorthand comment
//internet 11 does not support modern javascript

//variables

//Naming conventions: camelCase, no spaces, cannot start with a number, let and const cannot be used (reserved keywords)
// let is the new way of writing variables
let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

//const is used for variables that will not change
const points = 100;
console.log(points);

//old way of delcaring variables
var score = 75;
console.log(score);



//strings

//single or double quotes to make it a string
console.log("hello world");
let email = "rlontoc39@academic.rrc.ca"
console.log(email);

//string concatenation
let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName;

console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
//these methods do not alter the original value
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName);

//value passed into method called a arguement or parameter
let index = email.indexOf("@");
console.log(index);