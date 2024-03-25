// ================ Answer No 1 ====================

let cityName = prompt("Enter the city name:");

if (cityName.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights");
} else {
  alert("Welcome!");
}

// ================ Answer No 1 ====================

let gender = prompt("Enter your gender (male/female):");

gender = gender.toLowerCase();

if (gender === "male") {
  alert("Good Morning Sir.");
} else if (gender === "female") {
  alert("Good Morning Ma’am.");
} else {
  alert("Invalid input. Please enter either 'male' or 'female'.");
}

// ================ Answer No 3 ====================

let signalColor = prompt(
  "Enter the color of the road traffic signal (Red/Yellow/Green):"
);

signalColor = signalColor.toLowerCase();

switch (signalColor) {
  case "red":
    alert("Must Stop");
    break;
  case "yellow":
    alert("Ready to move");
    break;
  case "green":
    alert("Move now");
    break;
  default:
    alert("Invalid input. Please enter either 'Red', 'Yellow', or 'Green'.");
}

// ================ Answer No 4 ====================

let remainingFuel = parseFloat(
  prompt("Enter the remaining fuel in your car (in litres):")
);

if (remainingFuel < 1) {
  alert("Please refill the fuel in your car");
} else {
  alert("You have enough fuel in your car");
}

// ======================== Answer  No 5 ====================

// a.
let a = 4;
if (++a === 5) {
  alert("a: given condition for variable a is true");
}

// b.
let b = 82;
if (b++ === 83) {
  alert("b: given condition for variable b is true");
}

// c.
let c = 12;
if (c++ === 13) {
  alert("c: condition 1 is true");
}
if (c === 13) {
  alert("c: condition 2 is true");
}
if (++c < 14) {
  alert("c: condition 3 is true");
}
if (c === 14) {
  alert(" condition 4 is true");
}

// d.
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert(" The cost equals");
}

// e.
if (true) {
  console.log("e: True");
}

// f.
if ("car" < "cat") {
  alert("f: car is smaller than cat");
}
