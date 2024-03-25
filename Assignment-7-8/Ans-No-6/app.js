function calculatePercentage() {
  // Get input values
  let subject1Marks = parseFloat(document.getElementById("subject1").value);
  let subject2Marks = parseFloat(document.getElementById("subject2").value);
  let subject3Marks = parseFloat(document.getElementById("subject3").value);
  let totalMarks = parseFloat(document.getElementById("totalMarks").value);

  // Calculate total marks
  let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

  // Calculate percentage
  let percentage = (totalObtainedMarks / totalMarks) * 100;

  // Display the result
  document.getElementById("result").innerHTML =
    "Percentage: " + percentage.toFixed(2) + "%";
}
