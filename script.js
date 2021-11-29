// Assignment Code

//this will hold varables that I want to use globaly

  let generateBtn = document.querySelector("#generate");
  let passwordDisplayEl = document.querySelector("#password");
  let selectionPass = 0; //varifies that both lenth and types are correct when = 2


function generatePassword() {
  selectionPass = 0; //clear selectionPass. if both length and character type pass selectionPass needs to = 2
  passwordDisplayEl.value = "";//clear the text box
  let min = 8;
  let max = 128;

  //differnt character types saved in arrays by type
  let lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "<", ">", "?", "/", ";", ":", "[", "]", "{", "}", "`", "~"];

  //get data inside input element
  let passwordLength = document.getElementById("pwLength").value;

  if (passwordLength < min || passwordLength > max)//passwordLength is a number only input so there no need to check if its a string

  {
    //places the error message inside the password area
    passwordDisplayEl.value = "You must enter a number between 8-128";

  }
  else {
    //if there is the correct data, add one to indicate that is true
    selectionPass += 1
  }

  //get datta from checkboxes

  let useUpper = document.getElementById('useUpper').checked;
  let useLower = document.getElementById('useLower').checked;
  let useNumbers = document.getElementById('useNumbers').checked;
  let useSymbols = document.getElementById('useSpecial').checked;

  //array that holds the character type selection
  let chosenTypes = [useLower, useUpper, useNumbers, useSymbols];
  console.log(chosenTypes);

  //make sure at least one box is checked
  if (!chosenTypes[0] && !chosenTypes[1] && !chosenTypes[2] && !chosenTypes[3]) {
    //if password length is NOT acceptable then make a new line
    if (!selectionPass) {passwordDisplayEl.value +="\n"}
    //places the error message inside the password area
    passwordDisplayEl.value += "You must choose at least one character type";

  }
  else {
    //if there is the correct data, add one to indicate that is true. selectionPass needs to =2 
    selectionPass += 1
  }



  /////////add the components of each set of characters based off prev selections///////
  let characterArray = []; //values will hold all of the characters that were chosen by user for generating pw

  //checks each value in the array. if its true it adds the corrosponding character set array to characterArray set
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
  let generatedPassword = "";

  for (i = 0; i < passwordLength; i++) {
    generatedPassword += characterArray[Math.floor(Math.random() * characterArray.length)];
  }

  return generatedPassword;
}



// Write password to the #password input
function writePassword() {

  let password = generatePassword();


  console.log(selectionPass);
  if (selectionPass == 2) {
    //set new password
    passwordDisplayEl.value = password;
  }
console.dir(passwordDisplayEl.attributes);
}

// Add event listener for a click on generate button then run function
generateBtn.addEventListener("click", writePassword);
