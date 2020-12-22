// Assignment Code
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("startover");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberChar = "0123456789".split("");
var specialChar = "!@#$%^&*.-_=+?,.;:/~".split("");
var getNum = "";

function getNumber() {
  getNum = prompt("How many characters would you like your password to be?  Passwords must be between 8 and 128 characters.")
  getNum = Number(getNum)

  if ((getNum < 8) || (getNum > 128)) {
    alert("Passwords must be between 8 and 128 characters");
    getNumber();
  }
};

function generatePassword() {
  var totalArray = [];
  var passwordArray = [];
  var passwordString = "";

  getNumber()
  
  var useLower = confirm("Would you like your password to contain lowercase letters?");
  var useUpper = confirm("Would you like your password to contain uppercase letters?");
  var useNumber = confirm("Would you like your password to contain numbers?");
  var useSpecial = confirm("Would you like your password to contain special characters?");

  if ((useLower === false) && (useUpper === false) && (useNumber === false) && (useSpecial === false)) {
    alert("Your password does not have any characters to choose from.")
  }
  if (userLower === true) {
    totalArray = totalArray.concat(lowercaseChar)
  };
  if (useUpper === true) {
    totalArray = totalArray.concat(uppercaseChar)
  };
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
