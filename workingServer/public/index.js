let loginButton = document.getElementById("login")
let username = document.getElementById("username")
let password = document.getElementById("password")
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://compare-flight-prices.p.rapidapi.com/GetPricesAPI/StartFlightSearch.aspx?lapinfant=0&child=0&city2=NYC&date1=2022-05-11&youth=0&flightType=1&adults=1&cabin=1&infant=0&city1=LAX&seniors=0&date2=2021-01-02");
xhr.setRequestHeader("X-RapidAPI-Host", "compare-flight-prices.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "11f929f005msh8c534c5752f9716p165e04jsnf08ba251ab50");

xhr.send(data);


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

loginButton.addEventListener("click", login)
window.addEventListener("DOMContentLoaded", ()=> {
    xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler)

    query=""
    
    url = `/index`
    xhr.responseType = "json";   
    xhr.open("GET", url)
    
    xhr.send()

})