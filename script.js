// Assignment Code

var generateBtn = document.querySelector("#generate");

// assigning variable to the characters for the password. We want to chose from these variables to create our password
var letterOptionsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterOptionsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", ".", "?", "/", "~", "=", "+", "-", "_"];

// creating a function that generates the password
function generatePassword(){

  // asking user if they would like to generate a password 
  var confirmPassword = window.prompt("Would you like to generate a random password?");
  confirmPassword = confirmPassword.toUpperCase();
  if (confirmPassword == "YES"){
    window.alert("Ok, let's choose a few parameters");
  }else{
    return;
  }

  // Choosing password length and storing it in a variable
  var passwordLength = window.prompt("Choose a password length between 8 and 128 characters: ");

  // while loop makes sure that password is the correct length. 
  // the user will go through these prompts until their password lenght is correct. 
  while (passwordLength < 8 || passwordLength > 128){
    if (passwordLength < 8){
      var tryAgainLow = window.prompt("You chose too few. Please try again!");
      passwordLength = tryAgainLow;
    }else if (passwordLength > 128){
      var tryAgainHigh = window.prompt("CHILL! Too many characters. Please try again!");
      passwordLength = tryAgainHigh;
    }
  }

  // taking the stored value for password length and using it to help choose the proper number of characters



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
