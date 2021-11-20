// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var min=8;
  var max=128;
  passwordLength='';
  askLength();
  function askLength() {
    passwordLength = window.prompt("Password Length?");
    
    if (passwordLength < min || passwordLength > max || passwordLength === "" ) {
      window.alert("Please enter a number between 8-128");
      askLength();
    }
  }
  
   //must define these outside of function fist so we can use them pitside the function
   var useUpper = false;
   var useLower = false;
   var useNumbers = false;
   var useSymbols = false;
   getTypes();
   function getTypes() {
     useUpper = window.confirm("Use Upper Case?");
     useLower = window.confirm("Use Lower Case?");
     useNumbers = window.confirm("Use Numbers?");
     useSymbols = window.confirm("Use Symbols?");
     if (useUpper === false && useLower === false && useNumbers === false && useSymbols === false) {
       window.alert("You must choose a type")
       getTypes();
     }
   }
   debugger;
 var characterArray = ['a','b','c','d','e','f','g'];
  /////////////actually generat code//////////
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
