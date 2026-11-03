function calculateTripCost(destination, nights, pricePerNight) {
    return nights * pricePerNight;
}

let userName = prompt("Please enter your name:");
let destination = prompt("Enter the destination you want to travel to:");
let nights = Number(prompt("Enter the number of nights you plan to stay:"));
let pricePerNight = Number(prompt("Enter the price per night in dollars ($):"));

let totalCost = calculateTripCost(destination, nights, pricePerNight);

console.log(`Welcome, ${userName}!`);
console.log(`Trip to ${destination}: ${nights} nights at $${pricePerNight}/night = $${totalCost}`);