/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    UP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
  }
  var positionX = 0; // the x-coordinate location for the box
  var speedX = 0; // the speed for the box along the x-axis
  var positionY = 0; // the y-coordinate location for the box
  var speedY = 0; // the speed for the box along the y-axis

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('eventType', handleKeyUp);                           // change 'eventType' to the type of event you want to handle


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
  // SETUP...
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  function handleKeyDown(event) {
    if (event.which === KEY.UP) {
      console.log("up pressed");
      speedY = -5;
    } else if (event.which === KEY.LEFT) {
      console.log("left pressed")
      speedX = -5;
    } else if (event.which === KEY.RIGHT) {
      console.log("right pressed")
      speedX = 5;
    } else if (event.which === KEY.DOWN) {
      console.log("down pressed")
      speedY = 5;
    }
  }
  
  function handleKeyUp(event) {
    //if (event.which !== KEY.UP){
      speedY = 0
      speedX = 0
   // } else if (event.which !== KEY.DOWN){
    //  speedY = 0
    //} else if (event.which !== KEY.LEFT){
    //  speedX = 0
    //} else if (event.which !== KEY.RIGHT){
    //  speedX = 0
    //}
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function wallCollision() {
    if (positionX == 0){
      positionX = positionX + 5
    } else if (positionX == 440){
      positionX = positionX - 5
    } else if (positionY == 0){
      positionY = positionY + 5
    } else if (positionY == 440){
      positionY = positionY - 5
    }
  }
  
  function repositionGameItem() {
    positionX += speedX; // update the position of the box along the x-axis
    positionY += speedY; // update the position of the box along the y-axis
  }

  function redrawGameItem() {
    $("#walker").css("left", positionX); // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("top", positionY); // draw the box in the new location, positionY pixels away from the "top"
  }
}
