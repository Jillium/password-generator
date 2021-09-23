// Assignment code here
const numberChars = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";



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
  var characterAmount = prompt("How many characters would you like your password to be? Please chooose a number between 8 and 128");
  characterAmount = parseInt(characterAmount);
  if (characterAmount <8 || characterAmount >128) {
    prompt("Please make a valid selection between 8 and 128");
    generatePassword();
  }
  else {
    prompt("Okay, your password will be " + characterAmount + " digits long.");
  }
  

  for (var i = 0; i <characterAmount; i++) {
    stringNumberChars();
  }

  
  };

  var stringNumberChars = function() {
    var value = Math.floor(Math.random() * (numberChars.length));
    console.log(value);
  }

  

 

  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


