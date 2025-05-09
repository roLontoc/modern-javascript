// DOM (Document Object Model)
// created by the browser when the html document loads.

// grabbing the error class parargraph
const para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll(".error")
console.log(errors);
console.log(paras[0]);

// GET AN ELEMEMT BY ID

const title = document.getElementById("page-title");
console.log(title);

// GET ELEMENT BY CLASS NAME

const allErrors = document.getElementsByClassName("error");
console.log(allErrors);
console.log(allErrors[0]);

// GET ELEMENTS BY THEIR TAG NAME
const ps = document.getElementsByTagName("p");
console.log(ps);
console.log(ps[0]);