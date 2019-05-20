/*===================================================================*/
/* ===               Function For Buttons in HTML                   =*/
/* ===             Pulls 10 random gifs from Giphy                  =*/
/* ==================================================================*/

// need to add 2 arguments to a function. Within that function fetch from giphy. This will fix the call issue

// Adding click event listen listener to all buttons in container
document.querySelector("#buttons-view").addEventListener("click", function (event) {

    if (event.target.tagName == "BUTTON") {
  
      // Grabbing and storing the data-animal property value from the button
      var animal = event.target.dataset.animal;
      console.log(animal);
  
      // queryURL for Giphy API + my key and limits 10 animals gifs random
      function fetcher(arg1, arg2) {
        var queryURL = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=fVF3J7KazZyQXX2R41ITkVIa6Y3UEd0o&limit=10`;
        // asks giphy for animal search limited at 10
        fetch(queryURL, {
          method: "GET"
        })
          // After data comes back from the request
          .then(function (response)
          // data is converted to json format
          { return response.json() })
          // I recall that the response is equal to the return
          .then(function (response) {
            // console logging the fetch and what is returned
            console.log(queryURL);
            console.log(response);
  
            // storing the data from the AJAX request in the results variable
            var results = response.data;
          });
  
  
        // Looping through each result item
        var arg1 = function () {
          for (let item of results) {
  
            // Creating and storing a div tag
            var animalDiv = document.createElement("div");
  
            // Creating a paragraph tag with the result item's rating
            var p = document.createElement("p")
            p.innerText = `Rating: ${item.rating}`;
  
            // Creating and storing an image tag
            var animalImage = document.createElement("img");
  
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.setAttribute("src", item.images.fixed_height.url);
  
            // Appending the paragraph and image tag to the animalDiv
            animalDiv.appendChild(p);
            animalDiv.appendChild(animalImage);
  
            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            let gifContainer = document.querySelector("#gifs-appear-here");
            gifContainer.prepend(animalDiv);
          }
        };
  
  
        /* ===================================================================*/
        /* ===              Function for pausing Gifs                        =*/
        /* === taken from pausing-gifs-solved, need to make it work though... */
        /* ===================================================================*/
        //   if (event.target.tagName === 'img'.toUpperCase()) {
        //     let currentImg = event.target
        //     var state = currentImg.dataset.state
        //     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        //     // Then, set the image's data-state to animate
        //     // Else set src to the data-still value
        //     if (state === 'still') {
        //       currentImg.setAttribute('src', currentImg.dataset.animate)
        //       currentImg.setAttribute('data-state', 'animate')
        //     } else {
        //       currentImg.setAttribute('src', currentImg.dataset.still)
        //       currentImg.setAttributegh('data-state', 'still')
        //     }
        // }
        // }
        // });
  
        /* ==============================================================*/
        /* ===         Code Below Adds buttons to array                 =*/
        /* ===                                                          =*/
        /* === Issue is that it pulls a random gif, not animals         =*/
        /* ==============================================================*/
        var arg2 = function () {
          var animals = ["dog", "cat", "bird", "fish", "horse", "rabbit",
            "mouse", "alligator", "shark", "whale"];
  
          // Function for dumping the JSON content for each button into the div
          function displayAnimalInfo() {
            if (this.classList.contains("animal")) {
              var animal = this.dataset.name;
  
              //  // queryURL for Giphy API + my key and limits 10 animals gifs random
              //  var queryURL = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=fVF3J7KazZyQXX2R41ITkVIa6Y3UEd0o&limit=10`;
  
              //   fetch(queryURL, {
              //     method: "GET"
              //   })
              //   .then((result) => result.json())
              //   .then((response) => {
              //     document.querySelector("#buttons-view").innerText = JSON.stringify(response);
              //   });
              // }
            }
  
            // Function for displaying animals data
            function renderButtons() {
  
              // Deleting the animals buttons prior to adding new animals buttons
              // (this is necessary otherwise we will have repeat buttons)
              document.querySelector("#buttons-view").innerHTML = "";
  
              // Looping through the array of animals
              for (let animal of animals) {
  
                // Then dynamicaly generating buttons for each animals in the array.
                var a = document.createElement("button");
                // Adding a class
                a.classList.add("animal");
                // Adding a data-attribute with a value of the animals at index i
                // 
                // look up documentation on .setAttribute
                a.setAttribute("data-name", animal);
                // Providing the button's text with a value of the animals at index i
                a.innerText = animal;
                // Adding the button to the HTML
                document.querySelector("#buttons-view").appendChild(a);
              }
            }
            // This function handles events where one button is clicked
            document.querySelector("#add-animal").addEventListener("click", (event) => {
              // event.preventDefault() prevents the form from trying to submit itself.
              // We're using a form so that the user can hit enter instead of clicking the button if they want
              event.preventDefault();
  
              // This line will grab the text from the input box
              var animal = document.querySelector("#animal-input").value.trim();
              // The animal from the textbox is then added to our array
              animals.push(animal);
  
              // calling renderButtons which handles the processing of our animal array
              renderButtons();
  
            });
          }
          fetcher(arg1, arg2);
        }
      }
    });
  