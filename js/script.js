// Array of special characters to be included in password
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
const upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let passwordLength = 0
let generatedPassword = ""
let finalPassword = ""

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

  finalPassword = ""

  do {

    const lowercase = confirm("Would you like to use Lowercase Characters?")
    const uppercase = confirm("Would you like to use Uppercase Characters?")
    const numeric = confirm("Would you like to use Numeric Characters?")
    const specialChar = confirm("Would you like to use Special Characters? ($@%&*, etc)")

    if (lowercase) {
      finalPassword += lowerCasedCharacters.join("")
    }
    if (uppercase) {
      finalPassword += upperCasedCharacters.join("")
    }
    if (numeric) {
      finalPassword += numericCharacters.join("")
    }
    if (specialChar) {
      finalPassword += specialCharacters.join("")
    }

    if (finalPassword === "") {
      if (!confirm('You need to choose at least one "Character Type" or click "Cancel" to exit')) {
        return
      }
    }

  } while (finalPassword === "");
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  generatedPassword = ""
  getPasswordOptions()

  if (finalPassword === "") {
    return ""
  }

  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += getRandom(finalPassword)
  }
  return generatedPassword

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Copy to clipboard function
function copyToClipboard() {
  let copiedPass  = document.getElementById("password");
  let passwordCopied = copiedPass.value
  navigator.clipboard.writeText(passwordCopied).then(() => {
    alert("The password has been copied!");
  }, () => {
    alert("The password has not been copied, try again");
  });
}