// const { Duffel }=  require('@duffel/api')
// offer = null

// const duffel = new Duffel({
//   token: "duffel_test_V03aNNdroRuQ2YG6ON4_9syDpbphUkj_PjTHlgflF4t",
// })

button = document.getElementById("track")

button.addEventListener("click", track())
    
function track(){
    let xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler)
    query=''
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
    message.style.display = "block"
    if (this.response.success){    
        console.log(this.response.message)
    }else{
        console.log(this.response.success)
        
    }
}

