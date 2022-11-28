//document.getElementById("nameofid").value = "My value";
const form = document.pests

// form.goombas.value = 5
// form.bobombs.value = 7
// form.cheepcheeps.value = 11

// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     form.goombas.value * 5
//     var arr = form.qty
//     var tot=0
//     for(var i=0;i<arr.length;i++){
//         if(parseInt(arr[i].value))
//             tot += parseInt(arr[i].value);
//     }
//     document.getElementById('total').textContent = "Your total for today is: " + tot
// })

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    document.getElementById('total').textContent = "Your total for today is: " + (form.goombas.value * 5 + form.bobombs.value * 7 + form.cheepcheeps.value * 11)
})