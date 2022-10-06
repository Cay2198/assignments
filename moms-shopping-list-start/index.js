document.getElementById("add").addEventListener("click", function(e) {
    e.preventDefault()
    const newItem = createNewItem(e)
    document.getElementById("list").appendChild(newItem)
})

//remove button
var myNewItems = document.getElementsByTagName("li")
for (let i = 0; i < myNewItems.length; i++) {
    var span = document.createElement("button")
    var x = document.createTextNode("Remove")
    span.className = "remBtn"
    span.appendChild(x)
    myNewItems[i].appendChild(span)
}
var deleteNew = document.getElementsByClassName("remBtn")
for (let i = 0; i < deleteNew.length; i++) {
    deleteNew[i].onclick = function() {
        var div = this.parentElement
        div.style.display = "none"
    }
}

//Edit button
var myNewItems = document.getElementsByTagName("li")
for (let i = 0; i < myNewItems.length; i++) {
    var span = document.createElement("button")
    var x = document.createTextNode("Edit")
    span.className = "editBtn"
    span.appendChild(x)
    myNewItems[i].appendChild(span)
}
var edit = document.getElementsByClassName("editBtn")
for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
        var div = this.parentElement
        div.style.display = "inherit"
    }
}
//Newly added list items 
function createNewItem() {
    var newItem = document.createElement("li", "div")
    var newItemValue = document.getElementById("title").value
    //newItem.textContent = newItemValue
    var cont = document.createTextNode(newItemValue)
    newItem.appendChild(cont)
    if (newItemValue === " ") {
        alert("Use the text field below to add items to your shopping list")
    } else {
        document.getElementById("list").appendChild(newItem)
    }
    document.getElementById("title").value= " "


    var button = document.createElement("button")
    var x = document.createTextNode("Remove")
    button.className = "remBtn"
    button.appendChild(x)
    newItem.appendChild(button)

    for(let i = 0; i < remBtn.length; i++) {
        remBtn[i].onclick = function() {
            var div = this.parentElement
            div.style.display = "none"
        }
    }
   
}
