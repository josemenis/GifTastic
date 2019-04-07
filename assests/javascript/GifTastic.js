 // queryURL for Giphy API
 var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=fVF3J7KazZyQXX2R41ITkVIa6Y3UEd0o";

 fetch(queryURL)
 // then do something with the response (Promise)
   .then((response) => response.json()) 
   .then((myJson) => console.log(JSON.stringify(myJson)));

// variables
// Initial array of animals
var animals = ["dog", "cat", "mouse"];

// Function for displaying animals data
var renderButtons = () => {

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