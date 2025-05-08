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

//let likes = 10;
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

// // TEMPLATE STRINGS
// const title = "Best Roads of 2019"
// const author = "Mario";
// const likes = 30;

// concat
// let result = "the blog called " + title + " by " + author + " has " + likes + " likes ";

// template string way (backticks)
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html template
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

// // ARRAYS
let ninjas = ['shaun', 'ryu', 'chun-li'];

//override with a new value
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,25];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20]
// console.log(random);

//console.log(ninjas.length);

// // ARRAY METHODS

//joins all the array elements together seperated by commas
// let result = ninjas.join(',');

//shows the position of the element in the array
//let result = ninjas.indexOf('chun-li');

//let result = ninjas.concat('ken', 'crystal')

//shows the new length of the array
//this method alters the original value
//called a destructive mehtod
// let result = ninjas.push('ken');

// returns the result that was popped off (the last entered element)
// result = ninjas.pop();

// console.log(result);


// // BOOLEAN
//console.log(true, false, "true", "false");

let email = "luigi@thenetninja.co.uk";
let names = ["mario", "luigi", "toad"];

//would be false
// let result = email.includes("bowser");

// console.log(result);

// COMPARISON OPERATORS
let age = 25;

// //true
// console.log(age == 25);
// //false
// console.log(age == 30);
// //true
// console.log(age != 30);
// //true
// console.log(age > 20);
// //false
// console.log(age < 20);
// //true
// console.log(age <= 25);
// //true
// console.log(age >= 25);

// let name = "shaun";
// //true
// console.log(name =="shaun")
// //false
// console.log(name =="Shaun")
// //true necause s comes later in the alphabet then c. Later letters in the alphabet are greater than earlier ones
// console.log(name > "crystal")
// //true lowercase letters are greater than uppercase
// console.log(name >"Shaun")
// //true greater than any uppercase letter
// console.log(name >"Crystal")

// LOOSE COMPARISON
// differnt data types can still be equal because javascript type conversion

//true
//console.log(age == 25);
//console.log(age == "25");

//false
// console.log(age != 25);
// console.log(age != "25");

// STRICT COMPARISON
// differnt data types are not equal

// //true
// console.log(age === 25);

// //false conversion is not taking place
// console.log(age === "25");

// //false
// console.log(age !== 25);

// //true
// console.log(age !== "25");


// // TYPE CONVERSION
let score = "100";

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// results in NaN
//let result = Number("hello");
//let result = String(50)

//positive numbers are considered true
let result = Boolean(100);
//zero is false
// let result = Boolean(0);
//strings are true
// let result = Boolean('hello');
//empty string is false
// let result = Boolean('');

console.log(result, typeof result);