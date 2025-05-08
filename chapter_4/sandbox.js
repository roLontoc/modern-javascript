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