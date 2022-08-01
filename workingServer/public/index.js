let loginButton = document.getElementById("login")
let username = document.getElementById("username")
let password = document.getElementById("password")
let landing = document.getElementById("landing-content")
let loginContent = document.getElementById("login-content")
let loadLogin = document.getElementById("login-button-load")
let register = document.getElementById("register-now")
let signUp = document.getElementById("sign-up")
let emailUsername = document.getElementById("uname")
let signUpHref = document.getElementById("sign-up-href")
const data = null

loadLogin.addEventListener("click", load)
signUp.addEventListener("click", loadRegistration)

function load(event) {
    loginContent.removeAttribute("hidden")
    landing.setAttribute("hidden", true)
}

function loadRegistration(event) {
    emailUsername = document.getElementById("uname").value
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailUsername)))
    {
        console.log("helllo")
        signUpHref.setAttribute("href", "registration")
    }
    else
    {
        console.log(emailUsername)
        console.log("gbye")
        alert("You have entered an invalid email address!")
        signUpHref.setAttribute("href", "#")
        
    }
    
}   


function login(event){
    event.preventDefault()
    let xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler)
    query=`username=${username.value}&password=${password.value}`
    // when submitting a GET request, the query string is appended to URL
    // but in a POST request, do not attach the query string to the url
    // instead pass it as a parameter in xhr.send()
    url = `/attempt_login`
    xhr.responseType = "json";   
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    // notice the query string is passed as a parameter in xhr.send()
    // this is to prevent the data from being easily sniffed
    xhr.send(query)
}

function responseHandler(){
    let message = document.getElementById("message")

    message.style.display = "block"
    if (this.response.success){    
        message.innerText = this.response.message
    }else{
        console.log(this.response.success)
        message.innerText = this.response.message
    }

}

// loginButton.addEventListener("click", login)

// window.addEventListener("DOMContentLoaded", () => {
   
//     xhr = new XMLHttpRequest
//     xhr.addEventListener("load", responseHandler)

//     query=""
    
//     url = `/index`
//     xhr.responseType = "json";   
//     xhr.open("GET", url)
    
//     xhr.send()

// })