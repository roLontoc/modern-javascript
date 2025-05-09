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


// CHANGING ATTRIBUTES

const link = document.querySelector("a");
console.log(link.getAttribute('href'));
link.setAttribute("href", "https://www.rrc.ca");
link.innerText = "rrc polytech";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("style", "color: green;");


// // CHANGING STYLE ATTRIBUTES
// set attribute overrides all previous styles
const title = document.querySelector("h1");

//title.setAttribute("style", "margin: 50px;");
console.log(title.style);
console.log(title.style.color);

// this adds a new property without overriding it
title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px";
title.style.margin = "";





