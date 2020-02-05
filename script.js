// Assignment Code
// create a list of variables to use as potential characters 
var generateBtn = document.querySelector("#generate");
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = [];
var symbols = ["~", "!", "?", "@", "#", "$", "%","^", "&", "*"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// you have to ask the user to answer questions and then save the info to use in a variable to then
// validate the data and use a for loop to create a random assortment of characters to use as a password
function generatePassword() {
  
  var passwordLength = parseInt(prompt("How long would you like your password? (must be between 8-128"));
  if (passwordLength<8 || passwordLength>128) {
    alert("Please enter a value between 8 and 128 characters.")
  }
  //Make sure the value for password lenght is a number
   while (isNaN(passwordLength)) {
    alert("Please enter only a number between 8 and 128.");
    passwordLength=parseInt(prompt("How many characters for password length?"));
  }

  console.log(passwordLength);

  // Boolean for capital or lowercase
  var userUppercase = confirm("Would you like capital letters?")
  console.log(userUppercase);

  var userNumbers = confirm("Would you like numbers?")
  console.log(userNumbers);

  var userSymbols = confirm("Would you like symbols? ")
  console.log(userSymbols);

  // create a variable for the chosen random characters from the user answers above 
  var randomCharacters = [];
  
  if (userUppercase) {
    
    randomCharacters = randomCharacters.concat(alphabet);
  }

  if (userNumbers) {
    randomCharacters = randomCharacters.concat(numbers);
  }

  if (userSymbols) {
    randomCharacters = randomCharacters.concat(symbols);
  }

  console.log(randomCharacters);
  // create a for loop to run through the number specified by user and choose the random characters to then create the password 
  var newPassword = []; 
  for (i=0; i<passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * randomCharacters.length); 
    newPassword.push(randomCharacters[randomNumber]);
  }

// return the new password
  return newPassword.join(""); 

}

// create a function that writes the new password into the text box of the page 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


//generate the button to the page
generateBtn.addEventListener("click", writePassword);


