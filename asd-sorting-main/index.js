/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n ; i++) {
        for (let j = n - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                swap(array, j, j - 1);
                drawSwap(array, j, j - 1);
                updateCounter(bubbleCounter);
                await sleep();
            }
        }
    }
}

// TODO 3: Implement quickSort
async function quickSort(array, left, right) {
    if (left < right) {
        let pivot = partition(array, left, right);
        quickSort(array, left, pivot - 1);
        quickSort(array, pivot + 1, right);
    }
}

// TODOs 4 & 5: Implement partition
async function partition(array, left, right) {
    let pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
            drawSwap(array, i, j);
            updateCounter("#quickCounter");
            sleep();
        }
    }
    swap(array, i + 1, right);
    drawSwap(array, i + 1, right);
    updateCounter("#quickCounter");
    sleep();
    return i + 1;
}

// TODO 1: Implement swap
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep() {
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j) {
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter) {
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}