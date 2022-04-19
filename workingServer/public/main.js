

let button = document.getElementById("track")
let save = document.getElementById("save")
let dest = document.getElementById("destination")
let origin = document.getElementById("origin")
let cabinClass = document.getElementById("cabinClass")
let passengers = document.getElementById("passengers")
let username = document.getElementById("username")
    
function track(event) {
    event.preventDefault()
    let xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler)
    query=`username=${username.value}&dest=${dest.value}&origin=${origin.value}&cabinClass=${cabinClass.value}&passengers=${passengers.value}`
    // when submitting a GET request, the query string is appended to URL
    // but in a POST request, do not attach the query string to the url
    // instead pass it as a parameter in xhr.send()
    url = `/search`
    xhr.responseType = "json";   
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    // notice the query string is passed as a parameter in xhr.send()
    // this is to prevent the data from being easily sniffed
    xhr.send(query)
}

function responseHandler(){
    let message = document.getElementById("message")
    let flight1 = document.getElementById("flight1")
    let flight2 = document.getElementById("flight2")
    let flight3 = document.getElementById("flight3")
    message.style.display = "block"
    if (this.response.success){    
        console.log(this.response.message)
        message.innerText = "Here are the top 3 flights"
        flight1.innerText = "Round trip from " +this.response.message[0].slices[0].origin.iata_code +" to " + this.response.message[0].slices[0].destination.iata_code + "\n $" +this.response.message[0].total_amount
        flight2.innerText = "Round trip from " +this.response.message[1].slices[0].origin.iata_code +" to " + this.response.message[1].slices[0].destination.iata_code + "\n $" +this.response.message[1].total_amount
        flight3.innerText = "Round trip from " +this.response.message[2].slices[0].origin.iata_code +" to " + this.response.message[2].slices[0].destination.iata_code + "\n $" +this.response.message[2].total_amount
        
    } else {
        console.log(this.response.success)
        
    }


}

function saveSearch(event) {
    let xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler2)
    query=`username=${username.value}&dest=${dest.value}&origin=${origin.value}&cabinClass=${cabinClass.value}&passengers=${passengers.value}`
    // when submitting a GET request, the query string is appended to URL
    // but in a POST request, do not attach the query string to the url
    // instead pass it as a parameter in xhr.send()
    url = `/saveSearch`
    xhr.responseType = "json";   
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    // notice the query string is passed as a parameter in xhr.send()
    // this is to prevent the data from being easily sniffed
    xhr.send(query)
}

function responseHandler2(){
    let message = document.getElementById("message")
    message.style.display = "block"
    if (this.response.success){    
        console.log( this.response.message)
    }else{
        console.log(this.response.success)
       console.log(this.response.message)
    }
}
button.addEventListener("click", track)
save.addEventListener("click", saveSearch)



