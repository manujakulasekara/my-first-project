const flights = [
    { flightNo: "SB101", from: "Colombo", to: "Dubai", duration: 4, costPerHour: 85 },
    { flightNo: "SB202", from: "Colombo", to: "Tokyo", duration: 9, costPerHour: 75 },
    { flightNo: "SB303", from: "Colombo", to: "Paris", duration: 10, costPerHour: 90 },
    { flightNo: "SB404", from: "Colombo", to: "Sydney", duration: 12, costPerHour: 65 },
    { flightNo: "SB505", from: "Colombo", to: "Bangkok", duration: 3, costPerHour: 55 },
    { flightNo: "SB606", from: "Colombo", to: "London", duration: 13, costPerHour: 95 }
];

function planFlights(maxBudget) {
    let withinBudget = [];
    let overBudget = [];

    flights.forEach(flight => {
        let totalCost = flight.duration * flight.costPerHour;
        let flightWithCost = { ...flight, totalCost: totalCost };

        if (totalCost <= maxBudget) {
            withinBudget.push(flightWithCost);
        } else {
            overBudget.push(flightWithCost);
        }
    });

    withinBudget.sort(function(a, b) {
        return a.totalCost - b.totalCost;
    });

    console.log("=== Flight Budget Planner ===");
    console.log(`Max Budget: $${maxBudget}\n`);

    console.log("Flights Within Budget:");
    withinBudget.forEach((flight, index) => {
        let remaining = maxBudget - flight.totalCost;
        console.log(`${index + 1}. [${flight.flightNo}] to [${flight.to}] - Duration: [${flight.duration}]hrs - Total: $${flight.totalCost} (Remaining: $${remaining})`);
    });

    console.log("\nFlights Over Budget:");
    overBudget.forEach(flight => {
        let overBy = flight.totalCost - maxBudget;
        console.log(`[${flight.flightNo}] to [${flight.to}] - Total: $${flight.totalCost} (Over by: $${overBy})`);
    });

    if (withinBudget.length > 0) {
        let recommended = withinBudget[0];
        console.log(`\nRecommended flight: [${recommended.flightNo}] to [${recommended.to}] at $${recommended.totalCost}`);
    }

    return {
        withinBudget: withinBudget,
        overBudget: overBudget
    };
}

planFlights(700);