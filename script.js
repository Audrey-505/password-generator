// Assignment code here


var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbersArray = [0,1,2,3,4,5,6,7,8,9]
var specialArray = ["~","!","@","#","$","%","&","*"]

function generatePassword() {

var lengthPrompt = prompt('How long do you want your password to be? (Please select a number 8-128)')
var lowercasePrompt = prompt('Include lowercase letters? Yes or no')
var uppercasePrompt = prompt('Include uppercase letters? Yes or no')
var numbersPrompt = prompt('Include numbers? Yes or no')
var specialPrompt = prompt('Include special characters? Yes or no')

lengthPrompt = parseInt(lengthPrompt)
lowercasePrompt = lowercasePrompt.toUpperCase();
uppercasePrompt = uppercasePrompt.toUpperCase();
numbersPrompt = numbersPrompt.toUpperCase();
specialPrompt = specialPrompt.toUpperCase();

  if (lengthPrompt == null || isNaN(lengthPrompt) || lengthPrompt < 8 || lengthPrompt > 128 ) {
    alert('Your first input was not a valid number, please try again and select a number 8-128');
    return;
  }
  
  var userChoices = [];
  if (lowercasePrompt === 'YES') {
    userChoices = userChoices.concat(lowercaseArray)
    console.log(userChoices)
  }
  if (uppercasePrompt === 'YES') {
    userChoices = userChoices.concat(uppercaseArray)
    console.log(userChoices)
  }
  if (numbersPrompt === 'YES') {
    userChoices = userChoices.concat(numbersArray)
    console.log(userChoices)
  }
  if (specialPrompt === 'YES') {
    userChoices = userChoices.concat(specialArray)
    console.log(userChoices)
  }
  
 for (let i = 0; i < lengthPrompt; i++){
  var shuffled = [...userChoices].sort(() => .5 - Math.random())
  var password = shuffled.slice(0, lengthPrompt).join("")
 }
 return password
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
