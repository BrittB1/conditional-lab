// TASK:
// Create a program that tarcks plant growth given a specific area

//Establish Variables
const PI = 3.1415;
const radius = 5; 
const area = PI * radius * radius

// Plant Vars.
const minSpacePerPlant = 0.8;
const startingPlants = 20;

// Week Growth
let week = 3;

// Plant Weekly Double Growth
let plantCount = startingPlants * (2** week)

// AREA / Max capacity of the garden
let maxCapacity = area / minSpacePerPlant;

// ======================================
//                 PART 1
// ======================================
const week1 = 1;
const firstPlantCount = startingPlants * (2 ** week1);

if (firstPlantCount > maxCapacity * 0.8) {
    console.log("Week 1: " + firstPlantCount + " plants should be pruned.");

} else if (firstPlantCount >= maxCapacity * 0.5) {
    console.log("Week 1: " + firstPlantCount + " plants should be monitored.");

} else {
    console.log("Week 1: " + firstPlantCount + " plants should be planted.");
}

// ======================================
//                 PART 2
// ======================================
const bigStart = 100;
const bigWeeks = 10;

const bigPlantCount = bigStart * (2 ** bigWeeks);
const spaceNeeded = bigPlantCount * minSpacePerPlant;
const additionalSpace = spaceNeeded - area;

const newRadius = Math.sqrt(spaceNeeded / PI);

console.log("Plants after 10 weeks: " + bigPlantCount);
console.log("Space needed: " + spaceNeeded + " m2");
console.log("Additional space: " + additionalSpace + " m2");
console.log("New radius: " + newRadius + " m");

// ======================================
//                 PART 3
// ======================================
try {
  const stubbornPlants = 100;
  const spaceRequired = stubbornPlants * minSpacePerPlant;

  if (spaceRequired > area) {
    throw new Error("Too cramped!! Need " + spaceRequired + " m2 but only have " + area + "m2.");
  }

  console.log("The plants have enough space now and are thriviiiiing.");

} catch (err) {
  console.log("ERROR: " + err.message);
}
