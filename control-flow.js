alert ("Hello")
function plantGrowthControl(weeks) {
    const PI = 3.1415;
    const radius = 5;
    const area = PI * radius * radius;
    const plantSpace = 0.8;
    const maxCapacity = area / plantSpace;
    let plantCount = 20;

    for (let i = 0; i < weeks; i++) {
        plantCount *= 2;
    }
    const plantPercentage = (plantCount / maxCapacity) * 100;
    if (plantPercentage > 80) {
        return "Prune the plants";
    } else if (plantPercentage >= 50 && plantPercentage <= 80) {
        return "Monitor the plants";
    } else {
        return "Plant more plants";
    }
}

function calculateGardenExpansion(weeks, initialPlantCount, area) {
    const PI = 3.1415;
    const plantSpace = 0.8;

    let plantCount = initialPlantCount;

    for (let i = 0; i < weeks; i++) {
        plantCount *= 2;
    }

    const totalSpaceRequired = plantCount * plantSpace;

    try {
        if (totalSpaceRequired > area) {
            throw new Error("The space required exceeds the available space in the garden.");
        }
    } catch (error) {
        console.log(error.message);
        return;
    }

    const expandedRadius = Math.sqrt(totalSpaceRequired / PI);

    return {
        totalSpaceRequired: totalSpaceRequired,
        expandedRadius: expandedRadius
    };
}

console.log(plantGrowthControl(1));
console.log(plantGrowthControl(2));
console.log(plantGrowthControl(3));

console.log(calculateGardenExpansion(10, 100, 500));


