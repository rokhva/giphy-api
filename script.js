// ____________________________________PSUEDO CODE____________________________________// 
//on screen load
//The prepopulated buttons will show on the page
//once a button is clicked 10 Giphs correlating to the button name will show on the screen
//button should have an active state, indicating that it's been selected

//The user can either select another option from the buttons, or add thier own button

//selecting a different button will show a new set of 10 giphs

//adding a new button
//the user will type into the box
//when they hit add the new button will appear next to the prepopulated buttons
//the button will dissapear on refresh
//Once hitting the new button the Giph's should repopulate according to the button name
//____________________________________________________________________________________//


//array to store all of the "pre-built" buttons. In this case, it's an arry of New Girl Charachters
var charArray = ["Jessica Day", "Nick Miller", "Schmidt", "Coach", "Cece", "Winston Bishop"];


//function to create buttons on landing
function createButtons() {
    //empties the container, so the buttons don't duplicate when adding a new one
    $("#giphyButtons").empty();
    //creates a button for every item listed in charArray
    for (var i = 0; i < charArray.length; i++) {
        //dynamically creates a new button, with the text of the array index
        var newButton = $("<button>" + charArray[i] + "</button>");
        //gives each button the class of "options"
        newButton.addClass("options");
        //gives each button the secondary outline style from Bootstraps style guide
        newButton.addClass("btn btn-outline-secondary m-1");
        //gives each button a data-name attribute that's the same as the text displayed on the button
        newButton.attr("data-name", charArray[i])

        //adds each button to the screen
        $("#giphyButtons").append(newButton);
        console.log(newButton);
    }
}

//function to populate the page with the correct GIPHs, depending on the button clicked
$(document).on("click", ".options", function () {
    //empties the container, so when a new button is pressed, only the GIPHs correlating to the pressed button are shown
    $("#giphyContainer").empty();
    //sets the search term equal to the data-name (same as name dispalyed on button) on the clicked button
    var searchTerm = $(this).attr("data-name");
    console.log(searchTerm);

    //inserts the keyword to be searched into the url, and set the limit of GIPHs returned to 10
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10"

    //ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        console.log(response.data[0].images.fixed_width_still.url);

        console.log(response.data[0].images.fixed_width.url);

        console.log(response.data);
        //assigning the correct data arrtibutes to each GIPH shown, so thier stat can be changed on click
        for (var j = 0; j < response.data.length; j++) {
            //stores the url for the ANIMATED version of the GIPH
            var movingUrl = response.data[j].images.fixed_height.url;
            //stores the url for the STILL version of the GIPH
            var stillUrl = response.data[j].images.fixed_height_still.url;
            //new image html tag
            var newGiph = $("<img>");
            //gives each GIPH generated the source of the STILL url
            newGiph.attr("src", stillUrl);
            //and the data-state of still
            newGiph.attr("data-state", "still");
            //gives each GIPH generated the data-animate attribute of the ANIMATED url
            newGiph.attr("data-animate", movingUrl);
            //and the data-still attribute the value of the still URL
            newGiph.attr("data-still", stillUrl);
            //gives each GIPH the class of giph
            newGiph.attr("class", "giph");
            //adds all of them to the page
            $("#giphyContainer").append(newGiph);
        }
    })
})

//creates the buttons
createButtons();

//click listener for each time one of the GIPHs is clicked
$(document).on("click", ".giph", function (){

    console.log("click is working");
  
    var state = $(this).attr("data-state");
    var animated = $(this).attr("data-animate");
    
    //if the state of the clicked gif is still, then it gets assigned the data-animate attribute (this swiches the url from the still one ot the moving one)
    if(state === "still"){
        $(this).attr("src", animated);
        $(this).attr("data-state", "animate");

    //if the state is animated, then it switches the URL to the still url
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})

//click listener for when the add button is clicked
$("#add").on("click", function (){
    console.log("this is working");
    //grabs the whatever was typed into the text field
    var newItem = $("#textFeild").val();
    //clears out the value after it's been grabbed
    $("#textFeild").val("");
    //adds the value to the end of the charArray
    charArray.push(newItem);
    console.log(charArray);
    //re-calls the function that creates the buttons (so the user generated button can be displayed on the page)
    createButtons();
})