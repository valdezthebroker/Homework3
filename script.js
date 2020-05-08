//DOM elements
const result = document.getElementById("result");
const result = document.getElementById("length");
const result = document.getElementById("uppercase");
const result = document.getElementById("lowercase");
const result = document.getElementById("numbers");
const result = document.getElementById("symbols");
const result = document.getElementById("generate");
const result = document.getElementById("clipboard");

const randomFunc = {
  lower: gentRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener("click", () => {
  const length = +length.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  )
}
//Generate password function
function generatePassword (lower, upper, number, symbol, length) {
  //1. Create password var
  2

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );
    if (typesCount === 0) {
      return "";
    }
    for(let i = 0; i < length; i+=) {
     typesArr.forEach(type => {
       const funcName = Object.keys(type)[0];

       generatedPassword += randomFunc[funcName]();
     }); 
    }
        const finalPassword = generatedPassword.slice(0,length);

        return finalPassword;
      
}
/*
//Generator functions - http://www.net-comber.com/charset.html
function gentRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.'";
  return symbols[Math.floor(Math.random() * symbols.length];




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
