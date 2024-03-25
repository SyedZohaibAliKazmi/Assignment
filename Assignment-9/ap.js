// ============== Answer No 1 =================

let studentNames = ["Syed", "Zohaib", "Ali", "Kazmi"];
console.log(studentNames);

// =================== Answer No 2 =====================

let studentNames1 = [];

// ====================== Answer No 3 =====================

let fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log(fruits);
console.log(fruits[1]);

// ======================Answer No 4 =======================

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

console.log(numbers[3]);

// ======================= Answer No 5 =====================

let booleanArray = [true, false, true, true, false];

console.log(booleanArray);
console.log(booleanArray[4]);

// =================== Answer No 6 =========================

let mixedArray = [1, "apple", true, 3.14, false, "orange"];

console.log(mixedArray);
console.log(mixedArray[2]);

// ===================== Answer No 7 =============

let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];

console.log(qualifications);

//  for single arry console

// console.log(qualifications[0])
// console.log(qualifications[1])
// console.log(qualifications[2])
// console.log(qualifications[3])
// console.log(qualifications[4])
// console.log(qualifications[5])
// console.log(qualifications[6])
// console.log(qualifications[7])

// ============Answer No 8 ===============

let studentScores = [320, 230, 480, 120];

studentScores.sort(function (a, b) {
  return a - b;
});
console.log(studentScores);

// =========================== Answer No 9===========================

let cities = ["Karachi", "Islamabad", "Quetta", "Peshawar", "Lahore"];

let selectedCities = [];

selectedCities.push(cities[0], cities[1], cities[2]);

console.log(selectedCities);
console.log(cities);
