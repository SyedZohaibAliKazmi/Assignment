

function displayMultiplicationTable() {
    // User Say Value input karnay kay liye
    let number = document.getElementById("numberInput").value;

    // agar user value input nahi karta to default 5 ka table show hoga
    if (number === "") {
      number = 5;
    }

    // old clear hojayega
    document.getElementById("multiplicationTable").innerHTML = "";

    // Generate and display the multiplication table
    let table = "<h3>Multiplication Table of " + number + "</h3><ul>";
    for (let i = 1; i <= 10; i++) {
      table += "<li>" + number + " x " + i + " = " + (number * i) + "</li>";
    }
    table += "</ul>";
    document.getElementById("multiplicationTable").innerHTML = table;
  }