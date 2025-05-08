// // FUNCTIONS

// FUNCTION EXPRESSION
// hoisting does not work for function expressions
// this is preferred as it makes readability better because the function must be declared before calling it.
// const speak = function(){
//   console.log("good day!");
// }

// calling the functions
// greet();
// speak();

// // FUNCTION DECLARATION
// javascript will hoist this up so even if i declare greet(); it will still work
// shouldn't do this because it is messy
// function greet(){
//   console.log("hello there");
// }


// // ARUGEMENTS AND PARAMETERS

// const speak = function(name = "luigi", time = "night"){
//   console.log(`good ${time} ${name}`);
// };

// // will use the default values
// speak();

// // will override the default values
// speak("shaun", "day");


// // RETURNING VALUES
//  const calcArea = function(radius){
//   // let area = 3.14 * radius**2  don't need the variable
//   return 3.14 * radius**2;
//  };



// // ARROW FUNCTIONS
// There
// if there is more than one parameter or zero parameter you need brackets
// const calcArea = (radius, somethingElse) => {
//   return 3.14 * radius**2;
// }

// const calcArea = () => {
//   return 3.14 * radius**2;
// }

// you can eliminate the curly braces and return keyword if it is a single return
// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);
// console.log(area);


// Arrow Functions Practice

const greet = () => "hello world";
const greeting = greet();
console.log(greeting);


const bill = (products, tax) => {
  let total = 0;
  for(let i=0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total
}

const result = bill([10,15,30], 0.2);
console.log(result);


// // METHODS
// invoked using . notation
// defined on a data type or object
const name = "shaun";

let resultTwo = name.toUpperCase();
console.log(resultTwo);


// // CALLBACKS AND FOREACH
// we pass a function into another function or method as an arguement and at some point it may be called and passed a value.

// when we call this function we need to pass it a function as a parameter (MyFunc)
const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value); // call this callback function
};

// callback function called here.
// instead of passing in a string we are passing a function as an arguement
myFunc(value =>{
  // do something
  console.log(value)
});


// FOR EACH
//let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];


// alternative: you can define a callback function elsewhere then just pass it to the function
// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`)
// }

// passing the function as an parameter here
//people.forEach(logPerson)


// function defined within
// people.forEach((person, index) => {
//   console.log(person, index);
// });

const ul = document.querySelector(".people");

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = '';

people.forEach(person =>{
  // create html template
  html += `<li style="color: purple">${person}</li>`;

});

console.log(html);
ul.innerHTML = html;