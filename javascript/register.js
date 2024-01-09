
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

let form = document.querySelector(".form");
let formControl = document.querySelector(".form-control");
let btnSubmit = document.querySelector(".btn-submit");



btnSubmit.addEventListener('click', function() 
{
    Array.from(formControl).map((ele) =>
    ele.classList.remove('success', 'error')
);

let isValid = checkValidate();

/*if (isValid) 
{
    alert("Register successfully");
    
}*/
});

function showError(input, message)
{
    let parent = input.parentNode;
    let small = parent.querySelector(".form-message");
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input, message)
{
    let parent = input.parentNode;
    let small = parent.querySelector(".form-message");
    small.innerText = "";     
    parent.classList.remove("error");
    parent.classList.add("success")
}

function checkValidate()
{
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();

    let isCheck = true;

    if(emailValue == "")
    {
        showError(email, "Invalid email!")
        isCheck = false;
    }
    else if (!isEmail(emailValue)) {
        showError(email, 'Invalid email format');
        isCheck = false;
    }
    else
    {
        showSuccess(email);
    }

    if(passwordValue == "")
    {
        showError(password, "Invalid password!")
        isCheck = false;
    }
    else if(!isPassword(passwordValue))
    {
        showError(password, "Password must be at least 8 characters and include uppercase, lowercase, and special characters.")
        isCheck = false;

    }
    else
    {
        showSuccess(password);
    }

    if(confirmPasswordValue == "")
    {
        showError(confirmPassword, "Invalid!")
        isCheck = false;
    }
    else if(confirmPasswordValue != passwordValue)
    {
        showError(confirmPassword, "Incorrect password'")
        isCheck = false;
    }
    else
    {
        showSuccess(confirmPassword);
    }

    return isCheck;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password)
{
    if(password.length < 8)
    {
        return false;
    }

    if(!/[a-z]/.test(password))
    {
        return false;
    }

    if(!/[A-Z]/.test(password))
    {
        return false;
    }

    if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password))
    {
        return false;
    }
    return true;
}



// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
            pInput.type = "text";
        } else {
            eyeIcon.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
            pInput.type = "password";
        }
    });
});






