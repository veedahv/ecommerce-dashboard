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

let userInfoArr = [];
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
const validateEmail = (emailValid) => {
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
    const regex = /(?:[A-Za-z].*?\d|\d.*?[A-Za-z])/;
    let passwordValidTest = regex.test(String(passwordValid.value));
    console.log(passwordValidTest);
    if (passwordValid.value === '') {
        showError(passwordValid, 'Password cannot be blank');
    // } else if (passwordValid.value.length < 6) {
    //     showError(passwordValid, 'Password cannot be less than 8');
    } else if (passwordValidTest !== true) {
        showError(passwordValid, 'Password should contain atleast a number, a character and letter');
    } else {
        passwordValid.className = 'form-control success';
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
let imgLog = document.querySelector('#img-input');
let imgBox = document.querySelector('#img-box');
let imgBoxContain = document.querySelector('.img-box-contain');
let imgBoxNew = document.querySelector('#img-box-new');
let imgBoxfram = document.querySelector('.form-img-div');
let imgBtn = document.querySelector('.btn-box');
let el = document.getElementById('img-box');
let vanilla = new Croppie(el, {
    viewport: {
        enableExif: true,
        width: 80,
        height: 80,
        type: 'circle'
    },
    boundary: {
        height: 150
    },
    showZoomer: false,
});
// vanilla.method(args);
imgLog.addEventListener('change', (event) => {
    imgBox.src = URL.createObjectURL(imgLog.files[0]);

    vanilla.bind({
        url: imgBox.src,
    });
    console.log(imgLog)
    console.log(imgLog.value)
    console.log(URL.createObjectURL(imgLog.files[0]))
    console.log(imgLog.files[0])
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
                    location.href = 'https://vee-ecommerce-dashboard.netlify.app';
                    localStorage.setItem('userInfoArrProfile', JSON.stringify(userInfoArr));
                }
            }
        }
    }
}
imgBtn.addEventListener('click', function (event) {
    //on button click
    vanilla.result('blob').then(function (blob) {
        console.log(blob.type);
        imgBoxNew.src = URL.createObjectURL(blob, blob.type)
        let userInfo = {
            userImg: imgBoxNew.src,
        }
        userInfoArr = userInfo;

        // do something with cropped blob

        imgBoxfram.style.display = 'block';
        imgBoxContain.style.display = 'none';
        imgBtn.style.display = 'none';
    });
})
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

    if (password1.value !== password2.value && password1.value !== '') {
        password1.className = 'form-control error';
        password2.className = 'form-control error';
            showError(password1, 'Password do not match');
            showError(password2, 'Password do not match');
    } else {
        validatePassword(password1);
        validatePassword(password2);
    }
    requestMessage()
    console.log(userInfoArr);

});