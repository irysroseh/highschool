let loginBtn = document.getElementById('login-btn')
let email = document.getElementById('e-mail')
let password = document.getElementById('password')
let passwordRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
let mailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

loginBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    console.log(mailRegex.test(email.value))
    console.log(passwordRegex.test(password.value))

    if(!mailRegex.test(email.value) || !passwordRegex.test(password.value)) {
        document.getElementById("password").style.border = "2px Solid red"
        document.getElementById("e-mail").style.border = "2px Solid red"
        document.getElementById("password").style.backgroundColor = "#ff9999"
        document.getElementById("e-mail").style.backgroundColor = "#ff9999"
        document.getElementsByName("password")[0].placeholder = "Invalido"
        document.getElementsByName("e-mail")[0].placeholder = "Invalido"
        document.getElementById("password").style.color = "#d70000"
        document.getElementById("e-mail").style.color = "#d70000"
    }
})
