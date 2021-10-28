// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;

var randomLower=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "o", 
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(randomLower.length)
var randomUpper=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(randomUpper.length)
var randomNumber= Math.floor(Math.random() *10)
console.log(randomNumber)
var randomSymbol= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", ".", ",", "/", "?", 
";", ":"]
console.log(randomSymbol.length);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  passwordLength = prompt("How many characters would you like your password to contain? Choose between 8 and 128")

if (passwordLength < 8 || passwordLength > 128){
  passwordLength = prompt ("You must choose between 8 and 128");
  console.log("pass length " + passwordLength);
}

else {
  confirmLower = confirm("Press OK if you want to include lower case");
  console.log("lower case " + confirmLower)
  
  confirmUpper = confirm("Press OK if you want to include UPPER case");
  console.log("uper case " + confirmUpper)
  
  confirmNumber = confirm("Press OK if you want to include numbers");
  console.log("number " + confirmNumber)
  
  confirmSymbol = confirm("Press OK if you want to include special characters");
  console.log("special character " + confirmSymbol)
}

} 



function passwordText(passwordLength){

 
console.log(passwordText)
}



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page