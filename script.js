let form = document.querySelector('.form')
form.addEventListener('submit', handlesubmit)

let userName = document.querySelector('.user-name')
userName.addEventListener('input', handleUserName)
userName.addEventListener('blur', handleUserName)
let userNameErr = document.querySelector('.user-name-err')
userNameErr.style.display = 'none'

let Name = documen.querySelector('.name')
Name.addEventListener('.input', handleName)
Name.addEventListener('blur', handleName)
let NameErr = document.querySelector('.name-err')
NameErr.style.display = 'none'

let email = document.querySelector('.email')
email.addEventListener('input', handleEmail)
email.addEventListener('blur', handleEmail)
let emailErr = document.querySelector('.email-err')
emailErr.style.display = 'none'

let phoneNumber = document.querySelector('.phone-number')
phoneNumber.addEventListener('input', handlePhoneNumber)
phoneNumber.addEventListener('blur', handlePhoneNumber)
let phoneErr = document.querySelector('.phn-err')
phoneErr.style.display = 'none'

let password = document.querySelector('.password')
let confirmPassword = document.querySelector('.conf-password')
confirmPassword.addEventListener('input', handlePassword)
confirmPassword.addEventListener('blur', handlePassword)
let pwdErr = document.querySelector('.pwd-err')
pwdErr.style.display = 'none'

// handling the username
function handleUsername(event){
    if(userName.value.length == 0){
        userNameErr.style.display = 'none'
    }
    if(userName.value.length >=1 && userName.value.length <4){
        userNameErr.style.display = 'block'
    }
    else{
        userNameErr.style.display ='none'
    }
}

//handling name
function handleName(event){
    if(Name.value.split('').some((character) => character>=0)){
        NameErr.style.display = 'block'
    }
    else{
        NameErr.style.display = 'none'
    }
}

//handling the email
function handleEmail(event){
    if(email.value == null){
        emailErr.style.display = 'none'
    }
    if(((email.value.length >=1 || email.value.length>=5) && !email.value.split("").includes('@'))){
        emailErr.style.display = 'block'
    }
    else{
        emailErr.style.display = 'none'
    }
}

//handling the phone number
function handlePhoneNumber(event){
    if(event.target.value.length ==0){
        phoneErr.style.display = 'block'
    }
    else{
        pwdErr.style.display = 'none'
    }
}

//function to check if requirements satisfied
let errArray = document.querySelectorAll('p')
function flag(){
    for(let ele of errArray){
        if(ele.style.display == 'block'){
            return false
        }
    }
    return true
}

// handling the submit event
function handleSubmit(event){
    if(flag()){
        alert("user added successfully")
    }else{
        event.preventDefault()
    }
}

window.onload = function(){
    userName.value = null;
    Name.value = null
    email.value = null
    phoneNumber.value = null;
}

