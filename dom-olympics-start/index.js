//Text at top
var newH1 = document.createElement("h1")
newH1.textContent = "JavaScript Made This!!"
var header = document.getElementById("header")
header.append(newH1)
var name = document.createElement("span")
header.innerHTML += "<span id='name'>Cedric Young</span> wrote the JavaScript"

document.getElementById("header").style.textAlign = "center"
document.getElementById("name").style.color = "peachpuff"

//Change conversation to something fun 

//clear button 
var clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", removeDiv)
function removeDiv() {
    var mainDiv = document.querySelectorAll(".messages");
        for (let i = 0; i < mainDiv.length; i++) {
            mainDiv[i].innerHTML = "" 
}
}

var left = document.getElementsByClassName("message left")
left[1].remove()
left[0].innerHTML = "Hi friend!! How have you been??? :3"
var right = document.getElementsByClassName("message right")
for (let i = 0; i < right.length; i++) {
    right[0].innerHTML = "I've been Great!!"
    right[1].remove()
}
// right[0].innerHTML = ""
// right[1].innerHTML = ""


//Drop down theme selector
function dropTheme() {
    var x = document.getElementById("theme-drop-down").value
    if(x === "theme-one") {
    document.body.style.backgroundColor = "MidnightBlue"
    document.body.style.color = "brown"
    } else {
        if(x === "theme-two") 
        document.body.style.backgroundColor = "IndianRed"
        document.body.style.color = "black"
        
    }
}

//input field
// var btn = document.getElementsByTagName("btn").btnEvent()
// function btnEvent() {
//     var x = document.getElementById("input").value
//     document.getElementById("header").innerHTML = x
// }
function myFunction() {
    var x = document.getElementById("input").value
    document.getElementsByClassName("message left").innerHTML += x 
}