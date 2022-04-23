// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create a Character library
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '^', '&', '*', '(', ')', '-', '_', '+', '=', '/', '*', '?', '<', '>', '~'];

//Confirm the password include lowercase, uppercase, numeric, and/or special characters
function confirmPW() { 
  var pwLength = prompt("Please enter the password length between 8 and 128 characters");
  //Confirm the length of password, if it is invalid then discontinue the next procedure.
  if (isNaN(pwLength)=== true) {
    alert("The length of passworf must be a number, please try again.")
    return;
  }else if ((pwLength < 8) || (pwLength > 128)) {
    alert("The length of password at least 8 characters and no more than 128 characters, please try again.");
    return;
  }

  var pwNumbers = confirm("Do you want your password to include numbers?");
  var pwLowerCase = confirm("Do you want your password to include lower case letters?");
  var pwUpperCase = confirm("Do you want your password to include upper case letters?");
  var pwSpecial = confirm("Do you want your password to include special characters?");
  //Confirm all the selection, if they are all false the discontinue the next procedure.
  if (  pwNumbers === false &&
        pwLowerCase === false &&
        pwUpperCase === false &&
        pwSpecial === false ) {
    alert("Must select at least one character type, please try again.");
    return;
  }

  var result = [pwLength, pwNumbers, pwLowerCase, pwUpperCase, pwSpecial];
  return result;
}

//Concat all the possible characters to became a new array and take random characters to be the final password.
function generatePassword() {
  var selectionResult = confirmPW();
  var possibleCharacters = [];
  var finalPassword = []
  if (selectionResult[1] === true){
    possibleCharacters = possibleCharacters.concat(number);
  }
  if (selectionResult[2] === true){
    possibleCharacters = possibleCharacters.concat(lowerCharacter);
  }
  if (selectionResult[3] === true){
    possibleCharacters = possibleCharacters.concat(upperCharacter);
  }
  if (selectionResult[4] === true){
    possibleCharacters = possibleCharacters.concat(specialCharacter);
  }
  
  for (i=0; i<selectionResult[0]; i++) {
    finalPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
