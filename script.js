// Assignment code here

var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbersArray = [0,1,2,3,4,5,6,7,8,9]
var specialArray = ["~","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","?",",","."]

var lengthPrompt = prompt('How long do you want your password to be? (Please select a number 8-128)')
var lowercasePrompt = prompt('Include lowercase letters? Yes or no')
var uppercasePrompt = prompt('Include uppercase letters? Yes or no')
var numbersPrompt = prompt('Include numbers? Yes or no')
var specialPrompt = prompt('Include special characters? Yes or no')

// code above and if below needs to be in the same function
//if (!lengthPrompt || isNaN(lengthPrompt)) {
 // return;
//}

lengthPrompt = parseInt(lengthPrompt)
lowercasePrompt = lowercasePrompt.toUpperCase();
uppercasePrompt = uppercasePrompt.toUpperCase();
numbersPrompt = numbersPrompt.toUpperCase();
specialPrompt = specialPrompt.toUpperCase();

if (lengthPrompt >= 8 && lengthPrompt <= 128){
  var correctLength = lengthPrompt 
}

var userChoices = [];
if (lowercasePrompt === 'YES') {
  userChoices.concat(lowercaseArray)
}
if (uppercasePrompt === 'YES') {
  userChoices.concat(uppercaseArray)
}
if (numbersPrompt === 'YES') {
  userChoices.concat(numbersArray)
}
if (specialPrompt === 'YES') {
  userChoices.concat(specialArray)
}


for (let i = 0; i < correctLength.length; i++) {
  userChoices += Math.floor(Math.random() * correctLength)

}

function generatePassword() {
  return 'hello';
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



/* userChoices = []
if (lowercaseArray) {
  userChoices.concat(uppercaseArray)
}
if (uppercaseArray) {

} */