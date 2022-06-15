const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = 31;
const sum = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue, 
    totalBatteries);
console.log(sum);