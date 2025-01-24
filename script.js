// script.js

// Define the countdown for the limited time offer piece (Piece 4)
const countdownElement = document.getElementById("countdown");
const endTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour from now

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "Offer Expired!";
        document.getElementById("buy-piece-4").disabled = true; // Disable purchase button
        document.getElementById("buy-piece-4").style.backgroundColor = "#ddd"; // Gray out the button
    } else {
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);
        countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Function to handle button clicks (simulate purchase process)
function handlePurchase(pieceId) {
    alert(`You have purchased ${pieceId}!\nRedirecting to OpenSea...`);
    window.location.href = `https://opensea.io/assets/your-nft-collection/${pieceId}`;
}

// Add event listeners for buy buttons
document.getElementById("buy-piece-1").addEventListener("click", function() {
    handlePurchase(1);
});

document.getElementById("buy-piece-2").addEventListener("click", function() {
    handlePurchase(2);
});

document.getElementById("buy-piece-3").addEventListener("click", function() {
    handlePurchase(3);
});

document.getElementById("buy-piece-4").addEventListener("click", function() {
    handlePurchase(4);
});
