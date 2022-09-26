var myList = document.getElementById("my-list")
/*
this displays the text content only, ignoring any html elemtents. Pure text
console.log(myList.textContent)
*/
//this displays all text and elements 
console.log(myList.innerHTML)
//using innerHTML we are able to create a new element
myList.innerHTML += "<li>3</li>"
//This is handy to create quick elements



/*
This is the proper, cleaner way of creating elements to adding to pages. With this styling is easier as well(more control)

var newPara = document.createElement("p")
newPara.textContent = "test test test"
document.body.append(newPara)
*/


//quick and "dirty" way to create element and how to add styling to such element.
document.body.innerHTML += "<p id='paragraph'>paragraph with innerHTML</p>"
document.getElementById("paragraph").style.textAlign = "center"
document.getElementById("paragraph").style.color = "red"


/* extra questions: 
1. what is difference of .append() and .appendChild() method?
    .append() accepts Node objects and DOMstrings while .appendChild() accepts only Node objects. .appendChild() also only allows one object attachment while .append() allows multiple


2. what is pro/cons of .createElement and append vs. using .innerHTMl
    .createElement and .append() is thorough and easier to style. .innerHTML is quick and easy but less secure and more work to style


3. what happens if I create an element using .createElement but don't use the .append()?
    if .createElement is used without .append(), the new element does not get displayed

*/