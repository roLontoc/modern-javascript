// // FOR LOOPS
// for(let i = 0; i < 5; i++){
//   console.log("in loop:", i);
// }

// console.log("loop done");

// looping through array
// const names = ["shaun", "mario", "luigi"];

// for(let i = 0; i < names.length; i++){
//   //console.log(names[i]);
//   let html = `<div>${names[i]}</div>`
//   console.log(html);
// }



// // WHILE LOOPS
// let i = 0;

// // this would be an infinate loop without the i++
// while(i < 5){
//   console.log("in loop:", i)
//   i++; //added to break that infinate loop
// }

// const names = ["shaun", "mario", "luigi"];

// let i = 0;
// while(i < names.length){
//   console.log(names[i]);
//   i++
// }



// // DO WHILE LOOPS

// let i = 3;
// do{
//   console.log("val of i is:", i)
//   i++;
// } while(i <5);



// // IF STATEMENTS
const age = 25;

// message will be shown
// if(age > 20){
//   console.log("you are over the age of 20.");
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// // message we not be shown
// if(ninjas.length > 4) {
//   console.log("that's a lot of ninjas")
// }

// const password = "passwordsarecool";

// if(password.length >=12){
//   console.log("that password is mighty strong")
// }
// else if(password.length >= 8){
//   console.log("the password is long enough!");
// }
// else {
//   console.log("your password is not long enough.")
// }

// // LOGICAL OPERATORS
// const password = "p@ss";

// if(password.length >=12 && password.includes("@")){
//   console.log("that password is mighty strong")
// }
// else if(password.length >= 8 || password.includes("@") && password.length > 5){
//   console.log("the password is strong enough!");
// }
// else {
//   console.log("your password is not strong enough.")
// }


// // LOGICAL NOT (!)

// let user = false;

// if(!user){
//   console.log("you must be logged in to continue");
// }


// // BREAK AND CONTINUE
// const scores = [50, 25,0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//   if(scores[i] === 0){
//     continue;
//   }
//   console.log("Your score: ", scores[i]);

//   if(scores[i] === 100){
//     console.log("congrat you got thee top score!");
//     break;
//   }
// }


// // SWITCH STATEMENTS
const grade = "50"

// is === so has to be the same data type to evaluate to true
switch(grade){
  case "50" :
    console.log("You got an A!");
    break;
  case "B" :
    console.log("You got an B!");
    break;
  case "C" :
    console.log("You got an C!");
    break;
  case "D" :
    console.log("You got an D!");
    break;
  case "E" :
    console.log("You got an E!");
    break;
  default:
    console.log("not a valid grade");
}

