

let button = document.getElementById("track")
let save = document.getElementById("save")
let dest = document.getElementById("destination")
let origin = document.getElementById("origin")
let cabinClass = document.getElementById("cabinClass")
let passengers = document.getElementById("passengers")
let departureDate = document.getElementById("departure")
let returnDate = document.getElementById("return")
let searchContent = document.getElementById("search-content")
let loadContent = document.getElementById("load-content")
let newSearch = document.getElementById("new-search")
let newOffers = document.getElementById("old-search")
let loader = document.getElementById("loader")
let message = document.getElementById("message")
    
function track(event) {
    message.setAttribute("hidden", true)
    loader.removeAttribute("hidden")

    let retd = new Date(returnDate.value)
    let depd = new Date(departureDate.value)
    console.log(retd)
    console.log(retd.toISOString())

    event.preventDefault()
    let xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler)
    query=`dest=${dest.value}&origin=${origin.value}&cabinClass=${cabinClass.value}&passengers=${passengers.value}&depart=${depd.toISOString()}&return=${retd.toISOString()} `
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

function responseHandler() {
    loader.setAttribute("hidden", true)
    let flight1 = document.getElementById("flight1")
    let flight2 = document.getElementById("flight2")
    let flight3 = document.getElementById("flight3")
    message.removeAttribute("hidden")
    if (this.response.success) {   
        console.log(this.response.message)
        
        let flightArr = []
        for (f of this.response.message) {
            if (f === flightArr[flightArr.length - 1]) {
                continue
            }
            flightArr.push(f)
        }
        flightArr.sort((a, b) => { return a.total_amount - b.total_amount })
        let price1 = flightArr[0]
        let price2 = flightArr[flightArr.length/2]
        let price3 = flightArr[flightArr.length-1]
        let dup = price2;
        // for (f of flightArr) {
        //     if (price1 !== price2 && price2 !== price3 && price1 !== price3) {
        //         break
        //     }  
        //     if (f !== dup) { 
        //         if (dup ==+ price2) {
        //             price2 = f
        //             dup = price3
        //         }
        //         if (dup === price3 && dup !== price1) {
        //             price3 = f
        //             break
        //         }
                
        //     }
            
        // }
        if (price1.total_amount === price2.total_amount) {
            console.log("dpooo")
        }
        if (price2.total_amount === price3.total_amount) {
            console.log("saldfkj")
            
        }
        console.log(price1)
        console.log(price2)
        console.log(price3)

        console.log(price1.slices[0].segments[0].passengers[0].cabin_class)

        message.innerText = "Here are the top 3 flights"
        flight1.innerText = "Round trip in "+price1.slices[0].segments[0].passengers[0].cabin_class +" from " +price1.slices[0].origin.iata_code +" to " + price1.slices[0].destination.iata_code + "\n $" +price1.total_amount
        flight2.innerText = "Round trip in "+price2.slices[0].segments[0].passengers[0].cabin_class +" from " +price2.slices[0].origin.iata_code +" to " + price2.slices[0].destination.iata_code + "\n $" +price2.total_amount
        flight3.innerText = "Round trip in "+price3.slices[0].segments[0].passengers[0].cabin_class+" from " +price3.slices[0].origin.iata_code +" to " + price3.slices[0].destination.iata_code + "\n $" +price3.total_amount
        
    } else {
        console.log(this.response.success)
        
    }


}



function saveSearch(event) {
    let retd = new Date(returnDate.value)
    let depd = new Date(departureDate.value)
    loader.removeAttribute("hidden")
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

function responseHandler2() {
    loader.setAttribute("hidden", true)
    
    let message = document.getElementById("message")
    message.style.display = "block"
    if (this.response.success){    
        console.log( this.response.message)
    }else{
        console.log(this.response.success)
       console.log(this.response.message)
    }
}

function loadOffers(event) {
    loadContent.setAttribute("hidden", true)
    event.preventDefault()
    loader.removeAttribute("hidden")
    let xhr = new XMLHttpRequest
    xhr.addEventListener("load", responseHandler)
    query=``
    // when submitting a GET request, the query string is appended to URL
    // but in a POST request, do not attach the query string to the url
    // instead pass it as a parameter in xhr.send()
    url = `/GetOffers`
    xhr.responseType = "json";   
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    // notice the query string is passed as a parameter in xhr.send()
    // this is to prevent the data from being easily sniffed
    xhr.send(query)


}
function loadSearch(event) {
    event.preventDefault()
    loadContent.setAttribute("hidden", true)
    searchContent.removeAttribute("hidden")
    

}
newSearch.addEventListener("click", loadSearch)
newOffers.addEventListener("click", loadOffers)
button.addEventListener("click", track)
save.addEventListener("click", saveSearch)



