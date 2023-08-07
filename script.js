//your JS code here. If required.
// Get the element with ID "level"
var levelElement = document.getElementById("level");

// Function to calculate DOM level
function calculateDomLevel(element) {
    var level = 0;
    var currentElement = element;

    while (currentElement.parentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }

    return level;
}

// Calculate DOM level of the element
var domLevel = calculateDomLevel(levelElement);

// Display the result using alert
alert("The level of the element is: " + domLevel);
