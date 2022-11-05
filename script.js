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