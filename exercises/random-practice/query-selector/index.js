var result = document.querySelectorAll("ol#favourite-things > li")
console.log(Array.from(result))

for (var i = 0; i < result.length; i++) {
    result[i].textContent = "** REDACTED **"
}

// var result = docuement.querySelector("ol#favoutire-things > li")
// console.log(result)