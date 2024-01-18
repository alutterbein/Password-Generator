// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//our 4 arrays of choices
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var number = "1234567890".split("")
var specials = "!@#$%^&*_+".split("")

//confirmation from user
var isLowercase = confirm("Do you want lower case letters?")
var isUppercase = confrim("DO you want uppercase letters?")
var isNumber = confirm("Do you want numbers?")
var isSpecial = confirm("Do you want special characters?")

//you could also just write | if (islowercase) |  js is looking to see if isLowercase is ture regardless
if (isLowercase == true) {
  var randomCharacter = math.floor(math.random()*26)
  finalPassword.push(lowercase(randomCharacter))
}

if (isUppercase== true) {
  var randomCharacter = math.floor(math.random()*26)
  finalPassword.push(uppercase(randomCharacter))
}
if (isNUmber == true) {
  var randomCharacter = math.floor(math.random()*10)
  finalPassword.push(lowercase(randomCharacter))
}
if (isSpecial == true) {
  var randomCharacter = math.floor(math.random()*8)
  finalPassword.push(specials(randomCharacter))
}

//Add event listener to gen button
generateBtn.addEventListener("click", writePassword);


//place holder array > we need to put all the selected options into here
var finalPassword [];