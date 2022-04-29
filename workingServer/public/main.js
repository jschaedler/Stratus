

let button = document.getElementById("track")
let save = document.getElementById("save")
let dest = document.getElementById("destination")
let origin = document.getElementById("origin")
let cabinClass = document.getElementById("cabinClass")
let passengers = document.getElementById("passengers")
let departureDate = document.getElementById("departure")
let returnDate = document.getElementById("return")
    
function track(event) {

    console.log(d.toISOString())

    event.preventDefault()
    let xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler)
    query=`dest=${dest.value}&origin=${origin.value}&cabinClass=${cabinClass.value}&passengers=${passengers.value}`
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
    if (this.response.success) {   
        console.log(this.response.message)
        let price1 = this.response.message[0]
        let price2 = this.response.message[0]
        let price3 = this.response.message[0]
        let flightArr = []
        for (f of this.response.message) {
            if (f === flightArr[flightArr.length - 1]) {
                continue
            }
            flightArr.push(f)
        }
        flightArr.sort((a, b) =>{return a.total_amount - b.total_amount})
   
        console.log(flightArr)

        message.innerText = "Here are the top 3 flights"
        flight1.innerText = "Round trip from " +flightArr[0].slices[0].origin.iata_code +" to " + flightArr[0].slices[0].destination.iata_code + "\n $" +flightArr[0].total_amount
        flight2.innerText = "Round trip from " +flightArr[1].slices[0].origin.iata_code +" to " + flightArr[1].slices[0].destination.iata_code + "\n $" +flightArr[1].total_amount
        flight3.innerText = "Round trip from " +flightArr[2].slices[0].origin.iata_code +" to " + flightArr[2].slices[0].destination.iata_code + "\n $" +flightArr[2].total_amount
        
    } else {
        console.log(this.response.success)
        
    }


}



function saveSearch(event) {
    let retd = new Date(returnDate.value)
    let depd = new Date(departureDate.value)

    let xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler2)
    query=`dest=${dest.value}&origin=${origin.value}&cabinClass=${cabinClass.value}&passengers=${passengers.value}&depart=${depd.toISOString()}&return=${retd.toISOString()}`
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



