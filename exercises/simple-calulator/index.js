const add = document["addition"]

add.addEventListener("submit", function(e){
    e.preventDefault()

    const firstNum = add.firstInput1.value
    const secondNum = add.secondInput1.value
    add.firstInput1.value = ""
    add.secondInput1.value = ""
    const h1 = document.createElement("h1")
    h1.textContent = "The sum of the two numbers is: " + (+firstNum + +secondNum)
    document.getElementsByTagName("body")[0].append(h1)
})

const sub = document["subtraction"]

sub.addEventListener("submit", function(event){
    event.preventDefault()

    const firstNum = sub.firstInput2.value
    const secondNum = sub.secondInput2.value
    sub.firstInput2.value = ""
    sub.secondInput2.value = ""
    const h1 = document.createElement("h1")
    h1.textContent = "The difference of the two numbers is: " + (firstNum - secondNum)
    document.getElementsByTagName("body")[0].append(h1)
})

const mult = document["multiplication"]

mult.addEventListener("submit", function(event){
    event.preventDefault()

    const firstNum = mult.firstInput3.value
    const secondNum = mult.secondInput3.value
    mult.firstInput3.value = ""
    mult.secondInput3.value = ""
    const h1 = document.createElement("h1")
    h1.textContent = "The product of the two numbers is: " + (firstNum * secondNum)
    document.getElementsByTagName("body")[0].append(h1)
})