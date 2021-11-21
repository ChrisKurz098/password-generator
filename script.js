// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var min=8;
  var max=128;
  var passwordLength='';

  //ask for number, if it is <8 or >128 ask again
  askLength();
  function askLength() {
    passwordLength = window.prompt("Please choose the length of your password. Choose a number between 8-128.");
    
    if (passwordLength < min || passwordLength > max || passwordLength === "" || isNaN(passwordLength)==true)
    //isNaN checks if the value is NOT a number
    {
      window.alert("Please enter a number between 8-128");
      askLength();
    }
  }
  //Ask user for charater types. if they dont choose any character types then ask again
   //must define these outside of function fist so we can use them outside the function
   var useUpper = false;
   var useLower = false;
   var useNumbers = false;
   var useSymbols = false;
   getTypes();
   function getTypes() {
     useUpper = window.confirm("Should your password use Upper Case?");
     useLower = window.confirm("Should your password use Lower Case?");
     useNumbers = window.confirm("Should your password use Numbers?");
     useSymbols = window.confirm("Should your password use Symbols?");
     if (useUpper === false && useLower === false && useNumbers === false && useSymbols === false) {
       window.alert("You must choose at least one type type")
       getTypes();
     }
   }

   //array that holds the character type selection
   var chosenTypes = [useLower, useUpper, useNumbers, useSymbols];
   console.log(chosenTypes);
 
   //differnt character types saved in arrays by type
   var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
   var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "<", ">", "?", "/", ";", ":", "[", "]","{","}","`","~"];
 
   /////////add the components of each set of characters based off prev selections///////
   var characterArray = []; //this will hold all of the characters that were chosen by user

   //checks each value in the array. if its true it adds the corrosponding array to characterArray set
   if (chosenTypes[0]) {
     characterArray = characterArray.concat(lowerArray);
   }
   if (chosenTypes[1]) {
     characterArray = characterArray.concat(upperArray);
   }
   if (chosenTypes[2]) {
     characterArray = characterArray.concat(numberArray);
   }
   if (chosenTypes[3]) {
     characterArray = characterArray.concat(symbolArray);
   }
 
   console.log(characterArray)
   
  /////////////actually generate code//////////
  var generatedPassword = "";

  for (i = 0; i < passwordLength; i++) {
    generatedPassword += characterArray[Math.floor(Math.random() * characterArray.length)];
  }

  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
