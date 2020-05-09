const characterAmountRange = document.getElementById ("characterAmountRange")
const characterAmountNumber = document.getElementById ("characterAmountNumber")
const includeUppercaseElement = document.getElementById ("includeUppercase")
const includeLowercaseElement = document.getElementById ("includeLowercase")
const includeNumbersElement = document.getElementById ("includeNumbers")
const includeSymbolsElement = document.getElementById ("includeSymbols")
const form = document.getElementById("passwordGeneratorForm")
const passwordDisplay = document.getElementById("passwordDisplay")

const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowtoHigh (48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowtoHigh (33, 47).concat(arrayFromLowtoHigh(58, 64).concat(arrayFromLowtoHigh(91, 96).concat(arrayFromLowtoHigh(123, 126)

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

form.addEventListener("generate", e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols= includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.innertext = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat (NUMBERS_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat (SYMBOLS_CHAR_CODES)

  for (let i = 0; i < characterAmount, i++) {
    const character = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode)
  }
  return passwordCharacters.join("")
}

function arrayFromLowtoHigh(low,high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}




/*//DOM elements
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
