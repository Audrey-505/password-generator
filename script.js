// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This is where the code for funtion generatePassword() will go 
function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
















function myFunction() {
  let x = document.getElementById("numb").value;
  let text;
  if (isNaN(x) || x < 8 || x > 128) {
    text = "Input not valid, please input number 8-128";
  } else {
    text = "OK";
  }
  document.getElementById("demo").innerHTML = text;
}

function secondFunction() {
  if (document.getElementById("lowercase").checked == true) {
    text = "yes include lowercase letters in password";
  } else if (document.getElementById("lowercaseNo").checked == true) {
    text = "no do not include lowercase letters in password";
  } else {
    text = "no input selected";
  }
  document.getElementById("demoTwo").innerHTML = text;
}

function thirdFunction() {
  if (document.getElementById("uppercase").checked == true) {
    text = "yes include uppercase letters in password";
  } else if (document.getElementById("uppercaseNo").checked == true) {
    text = "no do not include uppercase letters in password";
  } else {
    text = "no input selected";
  }
  document.getElementById("demoThree").innerHTML = text;
}

function fourthFunction() {
  if (document.getElementById("numbers").checked == true) {
    text = "yes include numbers in password";
  } else if (document.getElementById("numbersNo").checked == true) {
    text = "no do not include numbers in password";
  } else {
    text = "no input selected";
  }
  document.getElementById("demoFour").innerHTML = text;
}

function fifthFunction() {
  if (document.getElementById("special").checked == true) {
    text = "yes include special characters in password";
  } else if (document.getElementById("specialNo").checked == true) {
    text = "no do not include special characters in password";
  } else {
    text = "no input selected";
  }
  document.getElementById("demoFive").innerHTML = text;
}

/* function secondFunction() {
  let x = document.getElementByName("lowercase").value;
  switch(x) {
    case "yes":
      text = "yes include uppercase letters";
      break;
    case "no":
      text = "no do not include lowercase letters";
      break;
    default: 
      text = "no value selected";
      break;
  }
  document.getElementById("demoTwo").innerHTML = text;
} */ 


/* function secondFunction() {
  let x = document.getElementsByName("lowercase").value;
  if (x == "no") {
    text = "no do not include lowercase letters in password";
  } else {
    text = "yes include lowercase letters in password";
  };
  document.getElementById("demoTwo").innerHTML = text;
}; */

/* function secondFunction() {
  let x = document.getElementById("lowercase").value;
  let y = document.getElementById("lowercaseNo").value;
  let text;
  if (y === "no") {
    text = "yes include lowercase letters in password";
  } else if (x === "yes") {
    text = "no do not include lowercase letters in password";
  } else {
    text = "no value selected"
  }
   document.getElementById("demoTwo").innerHTML = text;
  } */

/* WORKING CODE 
 function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (isNaN(x) || x < 8 || x > 128 ) {
    alert("invalid int entered");
  } else  {
    alert("Ok");
    return false;
  };
};
*/

/*
var a = {
    from: 0,
    to: 100
};

var correctLength = {
    from: 8,
    to: 128
};

OR

var numbers = []
for (var i = 1; i <= 100; i++) {
    numbers.push(i)
}

var correctLength = []
   for (var i = 8; i <= 128; i++) {
    correctLength.push(i)
};
*/

/* idea code 
let price = 10.5;
let day = "Monday";

day === "Monday" ? price -= 1.5 : price += 1.5;

let numberUsed = givenNumber
let givenNumber = input from criteria options 
let validNumber = 8 >= givenNumber || 128 <= givenNumber
number === "validNumber" ? numberUsed : "Sorry that is not a valid input, please enter a number between 8 and 128."

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

*/