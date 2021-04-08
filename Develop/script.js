// Password Generator Functions

//1. Present prompts for password criteria
//    *Length: Length must be 8-128 characters
//    *Character Type: Must include at least 1 character
//        *lowercase, 
//        *uppercase, 
//        *numeric, 
//        *and/or special characters
//2. Generate password that mights the critera
//        * Display in alert on written in page


//Password Variables - Arrays
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var characters =['!','@','#','$','%','^','&','*','(',')','+','=',',','.','<','>','?','/'];

// User prompts - Define password criteria



















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
