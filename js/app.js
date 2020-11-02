// Caching elements to variables
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const password = document.getElementById('password');
const viewPasswords = document.querySelectorAll('.icon-eye');
const thanks = document.querySelector('h4');
const capText = document.getElementById("cap-text");

// Show error message
const showError = (input, message) => {
    input.className = 'form-control error';
    const formGroup = input.parentElement.closest('.form-group');
    formGroup.querySelector('small').innerText = message;
};

const showPassword = (password) => {
    const formGroup = password.parentElement.closest('.form-group');
    if (formGroup.querySelector('input').type === 'password') {
        password.className = 'fa fa-eye-slash icon-eye position-absolute';
        formGroup.querySelector('input').type = 'text';
    } else {
        password.className = 'fa fa-eye icon-eye position-absolute';
        formGroup.querySelector('input').type = 'password';
    }
};
function validateEmail(emailValid) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValidTest = re.test(String(emailValid).toLowerCase());
    // console.log(emailValidTest);
    if (emailValidTest === true) {
        email.className = 'form-control success';
    } else {
        showError(email, 'Email invalid');
    }

}
function validatePassword(passwordValid) {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    let passwordValidTest = re.test(String(passwordValid));
    // console.log(passwordValidTest);
    if (passwordValidTest !== true) {
        showError(password1, 'password invalid');
    } else {
        password1.className = 'form-control success';
    }

}
function passwordCheck() {
    let checkPw1 = password1.classList.contains('success');
    if (password1.value === '') {
        showError(password1, 'Password cannot be blank');
    } else {
        validatePassword(password1.value);
    }

    if (password2.value === '') {
        showError(password2, 'Password cannot be blank')
    
    } else {
        password2.className = 'form-control success';
    }
}
// function checkCaps() {
//     if (event.getModifierState("CapsLock")) {
//         capText.style.display = "block";
//     } else {
//         capText.style.display = "none"
//     }

// }
// password.addEventListener('keyup', checkCaps);

// Event listeners

viewPasswords.forEach(function (viewPassword) {
    viewPassword.addEventListener('click', function (event) {
        showPassword(viewPassword);
    })
})
function requestMessage() {
    console.log('please work');
    let checkName = name.classList.contains('success');
    let checkEmail = email.classList.contains('success');
    let checkPw2 = password2.classList.contains('success');
    let checkPw1 = password1.classList.contains('success');

    if (checkName === checkEmail) {
        if (checkEmail === checkPw1) {
            if (checkPw1 === checkPw2) {
                if (checkName === true) {
                    location.href='index.html';
                }
            }
        }
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (name.value === '') {
        showError(name, 'Name cannot be blank');
    } else {
        name.className = 'form-control success';
    }

    if (email.value === '') {
        showError(email, 'Email cannot be blank');
    } else {
        validateEmail(email.value);
    }

    if (password1.value !== password2.value) {
        password1.className = 'form-control error';
        password2.className = 'form-control error';
        if (password1.value === '') {
            showError(password1, 'Password cannot be blank')
        } else {
            showError(password1, 'Password do not match')
        }
        if (password2.value === '') {
            showError(password2, 'Password cannot be blank')
        } else {
            showError(password2, 'Password do not match')
        }
    } else {
        passwordCheck();
    }
    requestMessage()

});