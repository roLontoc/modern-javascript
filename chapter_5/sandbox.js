// // OBJECT LITERALS

// put property on seperate line for readability
// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@tehnetninja.co.uk",
//   location: "berlin",
//   blogs: ["why mac and cheese rules", "10 things to make wiht marmite"]
// };

// console.log(user);

// // use fot notation to grab a specific property
// console.log(user.name);

// // update a property on an object
// user.age = 35;
// console.log(user.age);

// // sqaure bracket notation
// console.log(user["email"]);
// user["name"] = "chun-li";
// console.log(user["name"]);

// // can be useful if we are passing a variable in
// const key = "location"
// console.log(user[key]);


// ADDING METHODS TO USER OBJECTS
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@tehnetninja.co.uk",
  location: "berlin",
  blogs: [{title: "why mac and cheese rules", likes: 30},
          {title: "10 things to make with marmite", likes: 50}
  ],
  login: function(){ // : function not necessary
    console.log("the user is logged in");
  },
  logout(){
    console.log("the user is logged out");
  },
  logBlogs(){ //can't use arrow function because of the this keyword.
  // When we use the this object it doent change the value
    console.log("the user has written the following blogs:");
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    })
  }
};

// calling the functions
// user.login();
// user.logout();
// user.logBlogs();



//STORING OBJECTS IN ARRAYS
const blogs = [
  {title: "why mac and cheese rules", likes: 30},
  {title: "10 things to make with marmite", likes: 50}
];

//console.log(blogs);


// MATH OBJECT
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));

// rounds down to the nearest whole number
console.log(Math.floor(area));

//rounds up to the nearest whole number
console.log(Math.ceil(area));

// takes away the decimal and leaves just the int
console.log(Math.trunc(area));

// random numbers

// random number between 0 and 1
const random = Math.random();
console.log(random);

// produces a random whole number between 1 and 100
console.log(Math.round(random * 100));



// // PRIMITIVE VALUES
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)

// if we change the value here, it doesn't affect scoreTwo
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)


// // REFERENCE TYPES
// only stored once on the heap. Both variables are pointed to the same thing.
const userOne = {name: "ryu", age: "30"};
const userTwo = userOne;

// both names change.
userOne.name = "chun-li";
console.log(userOne, userTwo);
