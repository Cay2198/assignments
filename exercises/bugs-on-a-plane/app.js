var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector("input")
function formAlert() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementsByName;
    var genderChoice = {};
    if (document.getElementById("male").checked) {
        genderChoice = document.getElementById("male").value;
    } else if (document.getElementById("female").checked) {
        genderChoice = document.getElementById("female").value;
    } else if (document.getElementById("meh").checked) {
        genderChoice = document.getElementById("meh").value;
    }

    var location = document.getElementById("travel-location").value;
    var diet = [];
    if (document.getElementById("vegan").checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (document.getElementById("gluten").checked) {
        diet.push(document.getElementById("gluten").value);
    } 
    if (document.getElementById("paleo").checked) {
        diet.push(document.getElementById("paleo").value);
    }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + genderChoice + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
submit.addEventListener("click", formAlert) 
    

