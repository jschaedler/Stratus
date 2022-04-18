import { Duffel } from '@duffel/api'
offer = null

const duffel = new Duffel({
  token: duffel_test_V03aNNdroRuQ2YG6ON4_9syDpbphUkj_PjTHlgflF4t,
})

button = document.getElementById("track")

button.addEventListener("click", track())
    

function track() {
    console.log("hello")
    duffel.offerRequests.create({ 
        slices : [
          {
            origin: searchInputValueFrom,
            destination: searchInputValueTo,
            departure_date: StartDateInput
          },
          {
            origin: searchInputValueTo,
            destination: searchInputValueFrom,
            departure_date: EndDateInput
          }
        ],
        passengers: passengersArray,
        cabin_class: "economy"
      })
      .then(function(response) {
        res.json(response)
        console.log(response.data.slices)
      })
      .catch(err => console.log(err))

    // offer =  duffel.offerRequests.create({
    //     slices: [
    //         {
    //             origin: "NYC",
    //             destination: "ATL",
    //             departure_date: "2021-06-21"
    //         },
    //         {
    //             origin: "ATL",
    //             destination: "NYC",
    //             departure_date: "2021-07-21"
    //         }
    //     ],
    //     passengers: [{ type: "adult" }, { type: "adult" }, { age: 1 }],
    //     cabin_class: "business",
    //     return_offers: false
    // })

}