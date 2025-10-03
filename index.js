let heartCount = 0;
let coins = 100;
let history = JSON.parse(localStorage.getItem("callHistory")) || [];

const heartsCountTotal = document.getElementById("heartcount");
const coinBadge = document.getElementById("coincount");
const historyList = document.getElementById('history-list');

// Heart button
document.querySelectorAll('.fa-heart').forEach(icon => {
  icon.addEventListener('click', function() {
    heartCount++;
    heartsCountTotal.innerText = heartCount + " ❤️";
  });
});

// Function to render call history
function renderHistory() {
  historyList.innerHTML = ""; // clear existing list
  history.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.service} - ${entry.number} at ${entry.time}`;
    historyList.appendChild(li);
  });
}

// Call button
document.querySelectorAll('.call-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    const serviceTitle = button.dataset.service;
    const serviceNumber = button.dataset.number;

    // Check coins
    if (coins < 20) {
      alert("Cannot make the call!! Coins not enough!!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinBadge.innerText = coins + " 🪙";

    // Save to history
    let entry = { 
      service: serviceTitle, 
      number: serviceNumber, 
      time: new Date().toLocaleString() 
    };
    history.push(entry);
    localStorage.setItem("callHistory", JSON.stringify(history));

    // Render history
    renderHistory();

    // Alert
    alert(`Calling ${serviceTitle}: ${serviceNumber}`);
  });
});

// Clear history button
document.getElementById("cllhistory").addEventListener("click", () => {
  history = [];
  localStorage.removeItem("callHistory");
  renderHistory();
});
