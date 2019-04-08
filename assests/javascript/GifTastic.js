// Adding click event listen listener to all buttons
document.querySelector("#container").addEventListener("click", function(event) {

  if (event.target.tagName == "BUTTON") {
  // Grabbing and storing the data-animal property value from the button
  var animal = event.target.dataset.animal;
 
 
 // queryURL for Giphy API
 var queryURL = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=fVF3J7KazZyQXX2R41ITkVIa6Y3UEd0o&limit=10`;

 fetch(queryURL, {
  method: "GET"
})
  // After data comes back from the request
  .then(function(response) { return response.json() })
  .then(function(response) {
    console.log(queryURL);

    console.log(response);
    // storing the data from the AJAX request in the results variable
    var results = response.data;


 // Looping through each result item
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
});
}
});