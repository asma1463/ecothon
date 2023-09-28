// JavaScript
const buyButton = document.getElementById("buyButton");
const coinsDisplay = document.getElementById("coins");

let coins = 1000; // Initial coins

buyButton.addEventListener("click", () => {
    // Simulate item purchase (deduct 100 coins for demonstration)
    if (coins >= 100) {
        coins -= 100;
        coinsDisplay.textContent = coins;
        alert("Item purchased!");
    } else {
        alert("Not enough coins!");
    }
});
