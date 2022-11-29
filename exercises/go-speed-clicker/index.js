localStorage.setItem("name", "steve")
localStorage.setItem("age", 10)
localStorage.setItem("isAlive", true)
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))

const button = document.getElementById("clicker")
  
  let count = 0;
  button.onclick = function() {
  count += 1;
  let currentValue = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
  let newValue = currentValue  + 1;
  localStorage.setItem('myClicks', newValue);
   document.getElementById("permaCounter").textContent = "Clicks so far: " + newValue;
   document.getElementById("counter").textContent = "Click counter: " + count;
};

