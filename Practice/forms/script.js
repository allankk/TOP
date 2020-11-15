const validationObjects = {
    validateEmail: false,
    validateCountry: false,
    validateZipCode: false,
    validatePassword: false,
    validatePasswordConfirm: false
}


const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validateEmail = () => {
    validationObjects.validateEmail = true;
    const email = document.forms["indexForm"]["email"].value;
    const emailLabel = document.querySelector('label[for="email"]');

    removeError(emailLabel);

    if (!isValidEmail(email)) {
        console.log('email is invalid');
    
        createError(emailLabel);
        validationObjects.validateEmail = false;
    };
}

const validateCountry = () => {
    validationObjects.validateCountry = true;
    const countryLabel = document.querySelector('label[for="country"]');

    removeError(countryLabel);

    const country = document.forms["indexForm"]["country"].value;
    if (country == "") {
        console.log('country is required');

        createError(countryLabel);
        validationObjects.validateCountry = false;
    };
}

const validateZipcode = () => {
    validationObjects.validateZipCode = true;
    const zipcode = document.forms["indexForm"]["zipcode"].value;
    const zipcodeLabel = document.querySelector('label[for="zipcode"]');

    removeError(zipcodeLabel);

    if (isNaN(zipcode) || zipcode == "") {
        console.log('zipcode is invalid');

        createError(zipcodeLabel);
        validationObjects.validateZipCode = false;
    };
}

const validatePassword = () => {
    validationObjects.validatePassword = true;
    const savedPassword = document.forms["indexForm"]["password"].value;
    const passwordLabel = document.querySelector('label[for="password"]');

    removeError(passwordLabel);

    if (savedPassword == "") {
        console.log('password needs to be set');
        
        createError(passwordLabel);
        validationObjects.validatePassword = false;
    };
}

const validatePasswordConfirm = () => {
    validationObjects.validatePasswordConfirm = true;
    const passwordConfirmLabel = document.querySelector('label[for="password-confirm"]');
    const passwordConfirm = document.forms["indexForm"]["password-confirm"].value;

    const savedPassword = document.forms["indexForm"]["password"].value;

    removeError(passwordConfirmLabel);

    if (passwordConfirm != savedPassword || passwordConfirm == "") {
        console.log("passwords do not match");

        createError(passwordConfirmLabel);
        validationObjects.validatePasswordConfirm = false;
    };
}


const removeError = (parent) => {
    const error = document.querySelector(`label[for="${parent.getAttribute('for')}"] > a`);

    if (error != null) {
        error.parentNode.removeChild(error);
    }
}

const createError = (parent) => {
    const error = document.createElement('a');
    error.innerHTML = "Invalid";

    parent.appendChild(error);
} 

const validateForm = () => {

    validateEmail();
    validateCountry();
    validateZipcode();
    validatePassword();
    validatePasswordConfirm();

    let anyErrors = false;

    Object.keys(validationObjects).forEach(key => {
        if (validationObjects[key] == false) {
            anyErrors = true;
        }
    })

    if (anyErrors == false) {
        const main = document.querySelector('main[class="form-container"]');

        const successText = document.createElement('h1');
        successText.innerHTML = "Form Confirmed";

        main.appendChild(successText);
    } 

    return false;
} 