console.log("bye world")
// single comment

/* double
    single comment */

var a1=20;
var a1=30; /* Redeclare is possible */
console.log(a1)
a1=50; // Reassign is also possible

let a2=30;
let a2=40; // Redeclaring is not possible
a2=55; // Reassign is possible but redeclare is not possible

const a3=55;
a3=65; // reassigning is not possible

// var is a function scoped variable
// let and const are block variables
// var can do hoisting
// let and const can't