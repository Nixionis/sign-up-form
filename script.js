const password = document.querySelector('#password');
const confPassword = document.querySelector('#conf-password');

let passwordsMatch = false;

function addValidationCss(e) {
    e.target.classList.add('check-valid');
}

function checkPassword() {
    if (password.value === confPassword.value) {
        password.classList.remove('invalid');
        confPassword.classList.remove('invalid');

        password.classList.add('valid');
        confPassword.classList.add('valid');

        passwordsMatch = true;
    } else {
        password.classList.remove('valid');
        confPassword.classList.remove('valid');

        password.classList.add('invalid');
        confPassword.classList.add('invalid');

        passwordsMatch = false;
    }
}

document.querySelector('#first-name').addEventListener('input', addValidationCss);
document.querySelector('#last-name').addEventListener('input', addValidationCss);
document.querySelector('#email').addEventListener('input', addValidationCss);
document.querySelector('#number').addEventListener('input', addValidationCss);

password.addEventListener('input', checkPassword);
confPassword.addEventListener('input', checkPassword);