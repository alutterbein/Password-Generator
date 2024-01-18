//adding button push
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", askPassword);
//this function prompts user and creates the password on button push
function askPassword() {
var isCharlength = prompt("Choosed a character length between 8 and 128 characters")
var isLowercase = confirm("Do you want lower case letters?");
var isUppercase = confirm("Do you want uppercase letters?");
var isNumber = confirm("Do you want numbers?");
var isSpecial = confirm("Do you want special characters?");

//empty array
var finalPassword = []
//4 arrays of choices
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number = "1234567890".split("");
var specials = "!@#$%^&*_+".split("");

//creating the pw from filling the empty array
//I need to account for characters.. mathmatically, each step needs to be done ischarlength x 0.25 times
//isCharlength *.25(isCharlength) *25%(isCharlength)
if (isLowercase == true) {
  var randomCharacter = Math.floor(Math.random()*26)
  finalPassword.push(lowercase[randomCharacter])
};
if (isUppercase == true) {
  var randomCharacter = Math.floor(Math.random()*26)
  finalPassword.push(uppercase[randomCharacter])
};
if (isNumber == true) {
  var randomCharacter = Math.floor(Math.random()*10)
  finalPassword.push(number[randomCharacter])
};
if (isSpecial == true) {
  var randomCharacter = Math.floor(Math.random()*8)
  finalPassword.push(specials[randomCharacter])
};

//filling the password box with the array and changing it to a string
var finalPasswordString = finalPassword.join("")
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPasswordString;
};