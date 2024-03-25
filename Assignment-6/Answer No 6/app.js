 //  Prompt the user to enter three subject names
 let subject1 = prompt("Enter the name of the first subject:");
 let subject2 = prompt("Enter the name of the second subject:");
 let subject3 = prompt("Enter the name of the third subject:");

 // Total marks for each subject
 let totalMarksPerSubject = 100;

 // Take obtained marks for the first subject from the user
 let obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

 // Take obtained marks for the remaining 2 subjects from the user
 let obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
 let obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

 // Calculate total marks
 let totalMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;

 // Calculate percentage
 let percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;

 // Display the result in the browser
 document.write("<h3>Result:</h3>");
 document.write("<p>Subject 1: " + subject1 + "<br>");
 document.write("Obtained Marks: " + obtainedMarksSubject1 + "<br>");
 document.write("<br>");

 document.write("Subject 2: " + subject2 + "<br>");
 document.write("Obtained Marks: " + obtainedMarksSubject2 + "<br>");
 document.write("<br>");

 document.write("Subject 3: " + subject3 + "<br>");
 document.write("Obtained Marks: " + obtainedMarksSubject3 + "<br>");
 document.write("<br>");

 document.write("Total Marks: " + totalMarks + "<br>");
 document.write("Percentage: " + percentage.toFixed(2) + "%</p>");