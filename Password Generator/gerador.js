const passwordInput = document.getElementById('passwordInput');
const lowerCaseCheckBox = document.querySelector('#letrasMinusculas');
const upperCaseCheckBox = document.querySelector('#letrasMaiusculas');
const numberCheckBox = document.querySelector('#numeros');
const symbolsCheckBox = document.querySelector('#simbolos');
const passwordLengthInput = document.querySelector('input[id="inputLength"]');
const passwordLenghtLabel = document.querySelector('label[for="inputLength"]');
const generateBtn = document.getElementById('generateBtn');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%'];
const uppercaseChars = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const lowercaseChars = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

passwordLenghtLabel.innerHTML = passwordLengthInput.value

passwordLengthInput.addEventListener('change', () => {
    passwordLenghtLabel.innerHTML = passwordLengthInput.value
})


// Função para gerar senha

function passwordGenerate() {
    const passwordLength = parseInt(passwordLengthInput.value);
    const allChars = [];

    if (lowerCaseCheckBox.checked) {
        allChars.push(...lowercaseChars);
    }
    if (upperCaseCheckBox.checked) {
        allChars.push(...uppercaseChars);
    }
    if (numberCheckBox.checked) {
        allChars.push(...numbers);
    }
    if (symbolsCheckBox.checked) {
        allChars.push(...symbols);
    }

    let password = ''; // Criando a senha
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    passwordInput.value = password;
}

generateBtn.addEventListener('click', passwordGenerate);
