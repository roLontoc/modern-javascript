// DOM (Document Object Model)
// created by the browser when the html document loads.

// grabbing the error class parargraph
// const para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll(".error")
// console.log(errors);
// console.log(paras[0]);

// // GET AN ELEMEMT BY ID

// const title = document.getElementById("page-title");
// console.log(title);

// // GET ELEMENT BY CLASS NAME

// const allErrors = document.getElementsByClassName("error");
// console.log(allErrors);
// console.log(allErrors[0]);

// // GET ELEMENTS BY THEIR TAG NAME
// const ps = document.getElementsByTagName("p");
// console.log(ps);
// console.log(ps[0]);


// CHANGING TEXT
const para = document.querySelector("p");

// to add +=
para.innerText = "ninjas are awesome";

const paras = document.querySelectorAll("p");
paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += " extra text";
});


// CHANGING HTML
const content = document.querySelector(".content");
//console.log(content.innerHTML);

// += to append
content.innerHTML = "<h2> This is a New H2!</h2>"


// MAKING HTML TEMPLATE
const people = ["mario", "luigi", "yoshi"];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p> `
});


