// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// // Display the matrix
// console.log("Matrix:");
// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i].join(''));
// }

for (let i = 1; i <= 10; i++) {
  console.log(i, "zohaib ali");
}

// ============================ Answer No 2===============

let tableNumber = parseInt(prompt("Enter the table number:"));

// Prompt the user to enter the length of the table
let tableLength = parseInt(
  prompt("Enter the length of the multiplication table:")
);

// Print the multiplication table
console.log(
  "Multiplication table of " + tableNumber + " with length " + tableLength + ":"
);

for (let i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " * " + i + " = " + tableNumber * i);
}
