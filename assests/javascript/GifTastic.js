/* =================================================================== */
/* ===               Function For Buttons in HTML                   = */
/* ===             Pulls 10 random gifs from Giphy                  = */
/* ================================================================== */

// animals array
var animals = ['dog', 'cat', 'bird', 'fish', 'horse', 'rabbit', 'mouse', 'alligator', 'shark', 'whale']
// //////////////////////////////////////////////////////////////////////
// Function for displaying animals data
function renderButtons () {
  // Deleting the animals buttons prior to adding new animals buttons
  // (this is necessary otherwise we will have repeat buttons)
  document.querySelector('#buttons-view').innerHTML = ''

  // Looping through the array of animals
  for (let animal of animals) {
    // Then dynamicaly generating buttons for each animals in the array.
    var a = document.createElement('button')
    // Adding a class
    a.classList.add('animal')
    // Adding a data-attribute with a value of the animals at index i
    //
    // look up documentation on .setAttribute
    a.setAttribute('data-name', animal)
    console.log('Add animal buttons to test if the animal displays: ' + animal)
    // Providing the button's text with a value of the animals at index i
    a.innerText = animal
    // Adding the button to the HTML
    document.querySelector('#buttons-view').appendChild(a)
  }
}
// ////////////////////////////////////////////////////////////////////
// calling renderButtons which handles the processing of our animal array
renderButtons()
// /////////////////////////////////////////////////////////////////////
// This function handles events where one button is clicked
document.querySelector('#add-animal').addEventListener('click', (event) => {
  // event.preventDefault() prevents the form from trying to submit itself.
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault()

  // This line will grab the text from the input box
  var animal = document.querySelector('#animal-input').value.trim()
  console.log('animal data', animal)
  // The animal from the textbox is then added to our array
  animals.push(animal)
  renderButtons()
})
// //////////////////////////////////////////////////////////////////////////
// Adding click event listen listener to all buttons in container
document.querySelector('#container').addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    // Grabbing and storing the data-animal property value from the button
    var animal = event.target.dataset.animal

    // queryURL for Giphy API + my key and limits 10 animals gifs random
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=fVF3J7KazZyQXX2R41ITkVIa6Y3UEd0o&limit=10&rating=pg`
    // asks giphy for animal search limited at 10
    fetch(queryURL, {
      method: 'GET'
    })
    // After data comes back from the request, // data is converted to json format
      .then(function (response) { return response.json() })
    // I recall that the response is equal to the return
      .then(function (response) {
        // console logging the fetch and what is returned
        console.log(queryURL)
        console.log(response)
        // check the api call
        console.log('----------------------')
        console.log('1st api call')
        console.log('----------------------')

        // storing the data from the AJAX request in the results variable
        var results = response.data

        // Looping through each result item
        for (let item of results) {
          // Creating and storing a div tag
          var animalDiv = document.createElement('div')

          // Creating a paragraph tag with the result item's rating
          var p = document.createElement('p')
          p.innerText = `Rating: ${item.rating}`

          // Creating and storing an image tag
          var animalImage = document.createElement('img')

          // Setting the src attribute of the image to a property pulled off the result item
          animalImage.setAttribute('src', item.images.fixed_height.url)
          animalImage.setAttribute('data-animal', animal)
          // Appending the paragraph and image tag to the animalDiv
          animalDiv.appendChild(p)
          animalDiv.appendChild(animalImage)

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          let gifContainer = document.querySelector('#gifs-appear-here')
          gifContainer.prepend(animalDiv)
        }
      })
  }
})

/* =================================================================== */
/* ===              Function for pausing Gifs                        = */
/* === taken from pausing-gifs-solved, need to make it work though... */
/* =================================================================== */
// if (event.target.tagName === 'img'.toUpperCase()) {
//   let currentImg = event.target
//   var state = currentImg.dataset.state
//   // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//   // Then, set the image's data-state to animate
//   // Else set src to the data-still value
//   if (state === 'still') {
//     currentImg.setAttribute('src', currentImg.dataset.animate)
//     currentImg.setAttribute('data-state', 'animate')
//   } else {
//     currentImg.setAttribute('src', currentImg.dataset.still)
//     currentImg.setAttributegh('data-state', 'still')
//   }
// }
