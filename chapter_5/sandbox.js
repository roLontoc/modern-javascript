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
user.login();
user.logout();
user.logBlogs();



//STORING OBJECTS IN ARRAYS
const blogs = [
  {title: "why mac and cheese rules", likes: 30},
  {title: "10 things to make with marmite", likes: 50}
];

//console.log(blogs);



