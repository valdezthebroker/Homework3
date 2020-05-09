

// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLowercase = "abcdefghijklmnopqrstuvwxyz";
var charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumbers = "0123456789"
var charSymbols = "!@#$%^&*()_-+={}[];:.?/"
var passwordLength; 
var uppercaseCheck;
var numberCheck;
var symbolCheck;

//Need to determine length of password
function determineLength(){
  passwordLength = prompt ("Choose your length of password between 8-128 characters:");

  if passwordLength < 8 {
    alert ("Password must be between 8-128 characters");
    determineLength();
  }
  else if (passwordLength > 128 {
    alert ("Password must be between 8-128 characters");
    determineLength();
  }
  else if (isNaN(passwordLength)){
    alert ("Password must be between 8-128 characters, only use (!@#$%^&*()_-+={}[];:.?/) for symbols")
  }
  else {
    alert ("Please choose at least one uppercase letter, number and symbol");
  }
  return passwordLength
}

//Need to choose uppercase letter
function determineUppercase(){
  uppercaseCheck = prompt ("Choose uppercase letters? \n (Yes or No)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === ""){
    alert("Please answer Yes or No");
    determineUppercase();
  }
  else if (uppercaseCheck === "yes" || uppercaseCheck === "y"){
    uppercaseCheck = true;
    return uppercaseCheck;
  }
  else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
    uppercaseCheck = false;
    return uppercaseCheck;
  }
  else {
    alert ("Please answer Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}

//Need to choose numbers
function determineNumbers(){
  numberCheck = prompt ("Choose numbers \n (Yes or No)");
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === ""){
    alert ("Please answer Yes or No");
    determineNumbers();
  }
  else if (numberCheck === "yes" || numberCheck ==="y"){
    numberCheck = true;
    return numberCheck;
  }
  else if (numberCheck === "no" || numberCheck ==="n"){
    numberCheck = false;
    return numberCheck;
  }
  else {
    alert ("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

//Need to choose symbols
function determineSymbol(){
  symbolCheck = prompt ("Choose symbols \n (Yes or No)");
  symbolCheck = symbolCheck.toLowerCase();

  if (symbolCheck === null || symbolCheck === ""){
    alert ("Please answer Yes or No");
    determineSymbol();
  }
  else if (symbolCheck === "yes" || symbolCheck ==="y"){
    numberCheck = true;
    return symbolCheck;
  }
  else if (symbolCheck === "no" || symbolCheck ==="n"){
    symbolCheck = false;
    return symbolCheck;
  }
  else {
    alert ("Please answer Yes or No");
    determineSymbol();
  }
  return symbolCheck;
}
//Combine uppercase, lowercase, numbers and symbols
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numbercheck);
  determineSymbol();
  console.log(symbolCheck);

var characters = charLowercase;
var password = "";
  if (uppercaseCheck && numberCheck && symbolCheck){
  characters += charUppercase + charNumbers + charSymbols;
  }
  else if (uppercaseCheck && numberCheck){
    characters += charUppercase + charNumbers;
  }
  else if (numberCheck)
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
