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

const speak = function(name = "luigi", time = "night"){
  console.log(`good ${time} ${name}`);
};

// will use the default values
speak();

// will override the default values
speak("shaun", "day");
