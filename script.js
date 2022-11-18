// Assignment Code
var generateBtn = document.querySelector("#generate");
var letterOptionsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterOptionsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", ".", "?", "/", "~", "=", "+", "-", "_"];

function generatePassword(){
  var confirmPassword = window.prompt("Woudl you like to generate a random password?");
  confirmPassword = confirmPassword.toUpperCase();
  if (confirmPassword == "YES"){
    window.alert("Ok, let's choose a few parameters");
  }else{
    return;
  }

  window.alert("Would you like your password to contain lower case letters?");
  var index = Math.floor(Math.random() * letterOptionsLowerCase.length);
  var randomLowerCaseLetter = letterOptionsLowerCase[index];
  window.alert("your random lower case letter is " +randomLowerCaseLetter );

  window.alert("Would you like your password to contain upper case letters?");
  var index = Math.floor(Math.random() * letterOptionsUpperCase.length);
  var randomUpperCaseLetter = letterOptionsUpperCase[index];
  window.alert("Your random upper case letter is " + randomUpperCaseLetter);

  window.alert("Would you like your password to contain Numbers?");
  var index = Math.floor(Math.random() * numberOptions.length);
  var randomNumber = numberOptions[index];
  window.alert("Your random number is " + randomNumber);

  window.alert("Would you like your password to contain characters?");
  var index = Math.floor(Math.random() * characterOptions.length);
  var randomCharacter = characterOptions[index];
  window.alert("Your random character is " + randomCharacter);

  var randomPassword = (randomLowerCaseLetter+randomUpperCaseLetter+randomNumber+randomCharacter);

  window.alert("Your new password is " + randomPassword);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
