// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let passwordLength = 0
let generatedPassword = ""
let finalString = ""

// Function to prompt user for password options
function getPasswordOptions() {
  do {

    passwordLength = prompt("Choose a number between 10 and 64")

    if (passwordLength === null) {
      return
    }

    if (passwordLength < 10 || passwordLength > 64) {
      alert("You must choose a number between 10 and 64")
    }

  } while (passwordLength < 10 || passwordLength > 64 || passwordLength != parseInt(passwordLength));

  finalString = ""

  do {

    const lowercase = confirm("Would you like to use Lowercase Characters?")
    const uppercase = confirm("Would you like to use Uppercase Characters?")
    const numeric = confirm("Would you like to use Numeric Characters?")
    const specialChar = confirm("Would you like to use Special Characters? ($@%&*, etc)")

    if (lowercase) {
      finalString += lowerCasedCharacters.join("")
    }
    if (uppercase) {
      finalString += upperCasedCharacters.join("")
    }
    if (numeric) {
      finalString += numericCharacters.join("")
    }
    if (specialChar) {
      finalString += specialCharacters.join("")
    }

    if (finalString === "") {
      if (!confirm('You need to choose at least one "Character Type" or click "Cancel" to exit')) {
        return
      }
    }

  } while (finalString === "");
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  generatedPassword = ""
  getPasswordOptions()

  if (finalString === "") {
    return ""
  }

  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += getRandom(finalString)
  }
  return generatedPassword

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Copy to clipboard function
// function copyToClipboard(containerid) {
//   if (document.selection) {
//     var range = document.body.createTextRange();
//     range.moveToElementText(document.getElementById(containerid));
//     range.select().createTextRange();
//     document.execCommand("copy");
//   } else if (window.getSelection) {
//     var range = document.createRange();
//     range.selectNode(document.getElementById(containerid));
//     window.getSelection().addRange(range);
//     document.execCommand("copy");
//     alert("The password has been copied!")
//   }
// }

function copyToClipboard() {
  var copiedPass  = document.getElementById("password");
  let passwordCopied = copiedPass.value
  navigator.clipboard.writeText(passwordCopied).then(() => {
    alert("The password has been copied!");
  }, () => {
    alert("The password has not been copied, try again");
  });
}