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
