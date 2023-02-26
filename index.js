const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordEl = document.getElementById('password');
const generateBtn = document.querySelector('button');
const copyEl = document.getElementById('copy');

const passwordLength = 15;

function generatePassword() {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
         const randomNumber = Math.floor(Math.random()*characters.length);
         password += characters[randomNumber];
         copyEl.textContent = "Copy to Clipboard";
    }
    return password;
}

generateBtn.addEventListener('click', function() {
  const password = generatePassword();
  passwordEl.innerText = password;
});

copyEl.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordEl.innerText);
  copyEl.textContent = "Copied";
});