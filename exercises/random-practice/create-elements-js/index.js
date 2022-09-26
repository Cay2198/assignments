var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.append(newLi)
//creates new paragraph element (can by any element)
var newP = document.createElement("p")
//this declares the content of the element
newP.textContent = "hello, this text was added using javascript!"
//this is used to attach the new element to the bottom of the page .append (can use prepend to attach to the top of the page)
document.body.append(newP)
//Styling of elements from javascript. uses dot notation and "=" not ":"
newP.style.backgroundColor = "blue"
newP.style.textAlign = "center"
newP.style.fontSize = "45px"