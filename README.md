# giphy-api

#1 Problem Statement
This app allows the user to select a key word and view 10 GIPHs associated with that key word. All the GIPHs load as still images, and can be clicked one by one to play the GIPH. And clicked again to pause the GIPH.

#2 High Level Overview of App Organization
Primary states of the app (and thier abilities)
1 - Landing screen (Users can either press one of the pre-populated buttons to view GIPHs or type and add a category of thier own)
2 - Selected category (Once a button is pressed 10 GIPHs from that category show, they can be played on click)
3 - Add category (the user can type in the text field to the left of the add button and add thier own category)
4 - Page refresh (refreshing the page will get rid of any user generated categories)

#3 Start to Finish Instructions
// ___________________________________________________________________________________// 
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

#4 Link to Deployed Version of the App
https://rokhva.github.io/giphy-api/
