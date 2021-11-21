// Assignment Code
var generateBtn = document.querySelector("#generate");
var selectionPass = 0;

function generatePassword() {
  selectionPass = 0; //clear selectionPass. if both length and character type pass this needs to = 2
  var min = 8;
  var max = 128;


  //get data inside input element

  var passwordLength = document.getElementById("pwLength").value; 


  if (passwordLength < min || passwordLength > max )//this is a number only input so there no need to check if its a string

  {
    window.alert("Please enter a number between 8-128");

  }
  else { selectionPass += 1 }//if there is the correct data, add one to indicate that is true

  //get datta from checkboxes

  var useUpper = document.getElementById('useUpper').checked;
  var useLower = document.getElementById('useLower').checked;
  var useNumbers = document.getElementById('useNumbers').checked;
  var useSymbols = document.getElementById('useSpecial').checked;

  //make sure at least one box is checked
  if (useUpper === false && useLower === false && useNumbers === false && useSymbols === false) {
    window.alert("You must choose at least one type");

  }
  else { selectionPass += 1 }//if there is the correct data, add one to indicate that is true. This needs to =2 


  //array that holds the character type selection
  var chosenTypes = [useLower, useUpper, useNumbers, useSymbols];
  console.log(chosenTypes);

  //differnt character types saved in arrays by type
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "<", ">", "?", "/", ";", ":", "[", "]", "{", "}", "`", "~"];

  /////////add the components of each set of characters based off prev selections///////
  var characterArray = []; //this will hold all of the characters that were chosen by user for generating pw

  //checks each value in the array. if its true it adds the corrosponding character set array to characterArray
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
  if (selectionPass == 2) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
