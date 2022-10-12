var readlineSync = require('readline-sync')

var num1 = readlineSync.question("Please Enter Your First Number: ")
var num2 = readlineSync.question("please Enter your Second Number: ")
var choice = readlineSync.question("Please Enter The Operation to perform: (i.e add, sub, mult, div) ")
 

// function sum(num1, num2) {
//     return num1 + num2
//     console.log(sum)
// }
function minus(num1,num2) {
    return num1 - num2
}
function sum(num1, num2) {
    return +num1 + +num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}


var add = sum(num1,num2)
var sub = minus(num1,num2)
var mult = multiply(num1,num2)
var div = divide(num1,num2)
if(choice === "add"){
    console.log("The result is: " + add)
} else if(choice === "sub"){
    console.log("The result is: " + sub)
} else if(choice === "mult"){
    console.log("The result is: " + mult)
} else if(choice === "div"){
    console.log("The result is: " + div)
}
