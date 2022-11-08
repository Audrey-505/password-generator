// Assignment code here

var characterLength = document.getElementById('numb');
var includeLowercase = document.getElementById('lowercase');
var includeUppercase = document.getElementById('uppercase');
var includeNumbers = document.getElementById('numbers');
var includeSpecial = document.getElementById('special');
var pwForm = document.getElementById('form');

var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbersArray = [0,1,2,3,4,5,6,7,8,9]
var specialArray = ["~","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","?",",","."]

generateBtn.addEventListener("submit", myFunction => {
  myFunction.preventDefault()
  var passwordLength = characterLength.value
  var lowercaseYes = includeLowercase.checked
  var uppercaseYes = includeUppercase.checked
  var numbersYes = includeNumbers.checked
  var specialYes = includeSpecial.checked
  var passwordCreator = generatePassword(passwordLength, lowercaseYes, uppercaseYes, numbersYes, specialYes)
  password.innerText = passwordCreator
})

function generatePassword(passwordLength, lowercaseYes, uppercaseYes, numbersYes, specialYes) {
 var pwHolder = lowercaseArray
 if (uppercaseYes) pwHolder = pwHolder.concat(uppercaseArray)
 if (numbersYes) pwHolder = pwHolder.concat(numbersArray)
 if (specialYes) pwHolder = pwHolder.concat(specialArray)

 const passwordArray = []
 for (let i = 0; i < passwordLength; i++) {
  const passwordCode = pwHolder[Math.floor(Math.random() * pwHolder.length)]
  passwordArray.push(String.frompwHolder(passwordCode))
 }
 return passwordArray.join('')
}

function myFunction() {
  let x = document.getElementById("numb").value;
  let text;
  if (isNaN(x) || x < 8 || x > 128) {
    text = "Input not valid, please input number 8-128";
  } else {
    text = "OK";
  }
  document.getElementById("demo").innerHTML = text;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);