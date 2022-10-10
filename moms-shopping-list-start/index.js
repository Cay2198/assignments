var readlineSync = require('readline-sync')

document.getElementById("add").addEventListener("click", function(e) {
    e.preventDefault()
    const newItem = createNewItem(e)
    document.getElementById("list").appendChild(newItem)
})

//remove button
var myNewItems = document.getElementsByTagName("li")
for (let i = 0; i < myNewItems.length; i++) {
    var button = document.createElement("button")
    var x = document.createTextNode("Remove")
    button.className = "remBtn"
    button.appendChild(x)
    myNewItems[i].appendChild(button)
}
var deleteNew = document.getElementsByClassName("remBtn")
for (let i = 0; i < deleteNew.length; i++) {
    deleteNew[i].onclick = function() {
        myNewItems.remove("li")
        // var div = this.parentElement
        // div.style.display = "none"
    }
}

//Edit button
var myNewItems = document.getElementsByTagName("li")
for (let i = 0; i < myNewItems.length; i++) {
    var button = document.createElement("button")
    var x = document.createTextNode("Edit")
    button.className = "editBtn"
    button.appendChild(x)
    myNewItems[i].appendChild(button)
}
var edit = document.getElementsByClassName("editBtn")
// for (let i = 0; i < edit.length; i++) {
//     edit[i].onclick = function() {
//         var div = this.parentElement
//  ----------------- unsure of how to edit. come back soon --------------------------
//         div.style.display = " "
//     }
// }
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

    for(let i = 0; i < deleteNew.length; i++) {
        deleteNew[i].onclick = function() {
           newItem.remove()
        }
    }

    const editBtn = document.createElement("button")
    newItem.appendChild(editBtn)
    editBtn.textContent = "edit"

    const doneBtn = document.createElement("button")
    newItem.appendChild(doneBtn)
    doneBtn.textContent = "save"

    // make a done or save button. same was as above with a sepearte event listener

    editBtn.addEventListener("click", function() {
        newItem.contentEditable = true;
        newItem.focus()
        // myFunction()
    })
 
     doneBtn.addEventListener("click", function() {
        newItem.contentEditable = false;
     })

    function myFunction(){
        if(newItem.contentEditable = false){
            doneBtn.style.display = "none"
        }
    }
}
