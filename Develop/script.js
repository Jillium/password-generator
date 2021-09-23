// Assignment code here
const passwordChars = new Array ();
passwordChars[0] = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
passwordChars[1] = new Array ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z");
passwordChars[2] = new Array ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z");

const symbols = ["*", "&", ];


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
  //  var characterNumber = prompt('Would you like to include numbers in your password? Enter "YES" or "NO"');

  //  var characterUpper = prompt('Would you like to include uppercase letters in your password? Enter "YES" or "NO"');

  //  var characterLower = prompt('Would you like to include lowercase letters in your password? Enter "YES" or "NO"');

  //  var characterSymbols = prompt('Would you like to include symbols in your password? Enter "YES" or "No"');

  
   for (i=0; i<passwordChars.length; i++) {
     for (j=0; j<passwordChars[i].length; j++) {
       for (k=0; k<characterAmount; k++) {
         
       }
       console.log( passwordChars[i][j][0]);
     }
   } 
   
   
   // for (i = 0; i< numberChars.length; i++) {
      // for (j = 0; j < numberChars[i].length; j++) {
        // stringNumberChars();
        // console.log(characterAmount[i]);
      // }
      // stringNumberChars();
    // }

  
  };

  var stringNumberChars = function() {
    var value = Math.floor(Math.random() * (passwordChars.length));
    console.log(value);
  }

  

 

  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


