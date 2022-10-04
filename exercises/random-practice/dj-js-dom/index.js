var sq = document.getElementById("square")

sq.addEventListener("mouseover", mouseOver)
function mouseOver() {
    sq.style.backgroundColor = "blue"
}

sq.addEventListener("mousedown", mouseDown)
function mouseDown() {
    sq.style.backgroundColor = "red"
}

sq.addEventListener("mouseup", mouseUp)
function mouseUp() {
    sq.style.backgroundColor = "yellow"
}

sq.addEventListener("dblclick", dblClick)
function dblClick() {
    sq.style.backgroundColor = "green"
}

document.addEventListener("wheel", wheelScroll)
function wheelScroll() {
    sq.style.backgroundColor = "orange"
}

function myFunction(event) {
    var x = event.key;
  
    if (x == "b" || x == "B") { 
      sq.style.backgroundColor = "blue";
    } else {
        if (x == "r" || x == "R") {
            sq.style.backgroundColor = "red";
        } else {
            if (x == "y" || x == "Y") {
                sq.style.backgroundColor = "yellow";
            } else {
                if (x == "g" || x == "G") {
                    sq.style.backgroundColor = "green";
                } else {
                    if (x == "o" || x == "O") {
                        sq.style.backgroundColor = "orange";
                    }
                }
            }
        }
    }
  };