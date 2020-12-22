// Assignment Code

var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("startover");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberChar = "0123456789".split("");
var specialChar = "!@#$%^&*.-_=+?,.;:/~".split("");
var getNum = "";

// Asks for # of characters desired from user

function getNumber() {
  getNum = prompt("How many characters would you like your password to be?  Passwords must be between 8 and 128 characters.");
  getNum = Number(getNum);

  // Alert if # of characters is not within given range
  if ((getNum < 8) || (getNum > 128)) {
    alert("Passwords must be between 8 and 128 characters");
    getNumber();
  }
}

function generatePassword() {
  var totalArray = [];
  var passwordArray = [];
  var passwordString = "";

  getNumber();
  
  // User input for desired characters included in password

  var useLower = confirm("Would you like your password to contain lowercase letters?");
  var useUpper = confirm("Would you like your password to contain uppercase letters?");
  var useNumber = confirm("Would you like your password to contain numbers?");
  var useSpecial = confirm("Would you like your password to contain special characters?");

  // Alert if user inputs false on all options
  if ((useLower === false) && (useUpper === false) && (useNumber === false) && (useSpecial === false)) {
    alert("Your password does not have any characters to choose from.");
  }
  // Adds desired characters from arrays to the overall array
  if (useLower === true) {
    totalArray = totalArray.concat(lowercaseChar);
  }
  if (useUpper === true) {
    totalArray = totalArray.concat(uppercaseChar);
  }
  if (useNumber === true) {
    totalArray = totalArray.concat(numberChar);
  }
  if (useSpecial === true) {
    totalArray = totalArray.concat(specialChar);
  }

  for (var i = 0; i < getNum; i++) {
    var count = totalArray.length;
    var randomize = Math.floor(Math.random() * count);
    passwordArray.push(totalArray[randomize]);
  }

  passwordString = passwordArray.join("");

  return passwordString;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener generates button
generateBtn.addEventListener("click", writePassword);