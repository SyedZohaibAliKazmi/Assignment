function checkDivisibility() {
  let number = parseInt(document.getElementById("number").value);

  // Check if the number is divisible by 3
  if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
  } else {
    alert(number + " is not divisible by 3.");
  }
}

// ================= Answer No 9 ===========================

function checkEvenOrOdd() {
  // Get the number entered by the user
  let number = parseInt(document.getElementById("number2").value);

  // Check if the number is even or odd
  if (number % 2 === 0) {
    alert(number + " is an even number.");
  } else {
    alert(number + " is an odd number.");
  }
}

// ====================== Answer No 10 ========================

function checkTemperature() {
  
  let temperature = parseFloat(document.getElementById('temperature').value);

  
  let message = "";
  if (temperature > 40) {
      message = "It is too hot outside.";
  } else if (temperature > 30) {
      message = "The Weather today is Normal.";
  } else if (temperature > 20) {
      message = "Today’s Weather is cool.";
  } else if (temperature > 10) {
      message = "OMG! Today’s weather is so Cool.";
  } else {
      message = "The temperature is extremely cold.";
  }

    // Display the message
    // alert(message);
    document.getElementById("result").innerHTML = message;
}




// ==================== Answer No 11 is calcultor.Done it previous class ============