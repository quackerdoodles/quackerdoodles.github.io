// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify)


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (i = 0; i < image.length; i = i + 1) {
    for (j = 0; j < image[i][j].length; j = j + 1) {
      var rgbString = image[i][j]
      rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      image[i][j] = rgbString
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0]
  for (i = 0; i > image.length; i = i + 1) {
    for (j = 0; j > image.length; j = j + 1) {
      if (   image[i][j] = backgroundColor) {
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rbgNumbers)
        image[i][j] = rgbString
      }
    }
  }
}
// TODO 5: Create the keepInBounds function
function keepInBounds(param) {
  return param < 0 ? 0 : param > 255 ? 255 : param
}
// TODO 3: Create reddify function
function reddify(array) {
  array[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(param) {
  array[BLUE] = keepInBounds(array[BLUE] - 50);
}
function increaseGreenByBlue(param) {
  array[GREEN] = keepInBounds(array[BLUE] + array[GREEN]);
}
// CHALLENGE code goes below here
