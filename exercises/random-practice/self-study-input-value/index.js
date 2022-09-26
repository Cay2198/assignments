document.getElementById("btn").addEventListener("click", function() {
var inputBox = document.querySelector("#user-input").value
document.body.innerHTML += "<p>" + inputBox + "</p>"
})