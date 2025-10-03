let heartCount = 0;
let coins = 100;

const heartsCountTotal = document.getElementById("heartcount");
const coinBadge = document.getElementById("coincount");

// Heart button
document.querySelectorAll('.fa-heart').forEach(icon => {
  icon.addEventListener('click', function() {
    heartCount++;
    heartsCountTotal.innerText = heartCount + " ❤️";
  });
});

// Call button
const historyList = document.getElementById('history-list');

document.querySelectorAll('.call-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // stop page refresh

    const serviceTitle = button.dataset.service;
    const serviceNumber = button.dataset.number;

    // Check coins
    if (coins < 20) {
      alert("Cannot make the call!! Coins not enough !!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinBadge.innerText = coins + " 🪙";

  
    // Show alert
    alert(`Calling ${serviceTitle}: ${serviceNumber}`);
  })

})

 let entry = { 
      service: serviceTitle, 
      number: serviceNumber, 
      time: new Date().toLocaleString() 
    };
    history.push(entry);

  
    localStorage.setItem("callHistory", JSON.stringify(history));

  
    renderHistory();

   
    alert(`Calling ${serviceTitle}: ${serviceNumber}`);
 

// --- clear history button ---
document.getElementById("cllhistory").addEventListener("click", () => {
  historyList.innerHTML = "";
});
