// Assignment code here

// ask for length of password >=8 <=128


//ask what cases to include- lowercase, uppercase, special characters, number values


//when each prompt is answered validate input and at least 1 character type is selected

//when all prompts are answered then a password is generated that matches selected criteria

//when the password is generated then the password is displayed on an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterAmount = "";
  var includeUpperCase = "";
  var includeLowerCase = "";
  var includeNumbers = "";
  var includeSymbols = "";

  while (characterAmount === "" || characterAmount === null) {
    characterAmount = prompt ("How many characters would you like your password to be? Please choose a number between 8 and 128.");
    console.log(characterAmount);
  }

  while (includeUpperCase === "" || includeUpperCase === null) {
    includeUpperCase = prompt ('Would you like to use Uppercase letters? Enter "YES" or "NO".');
    console.log(includeUpperCase);
  }

  while (includeLowerCase === "" || includeLowerCase === null) {
    includeLowerCase = prompt ('Would you like to use Lowercase letters? Enter "YES" or "NO.');
    console.log(includeLowerCase);
  }

  while (includeNumbers === "" || includeNumbers === null) {
    includeNumbers = prompt ('Would you like to include Numbers? Enter "YES" or "NO".');
    console.log(includeNumbers);
  }

  while (includeSymbols === "" || includeSymbols === null) {
    includeSymbols = prompt ('Would you like to include Symbols? Enter "YES" or "NO".');
  }
 
  
  return characterAmount;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


