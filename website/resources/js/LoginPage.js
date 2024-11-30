// Get references to elements
const buttonArea = document.querySelector('.buttonArea');
const linkArea = document.querySelector('.linkArea');
const movingDivs = [
    { element: document.querySelector('.startArrow'), baseLeft: 40 },
    { element: document.querySelector('.characterArrow'), baseLeft: 35.8 }
];

// Function to make a div move left and right
function startMovingDiv(movingDiv, baseLeft) {
    let position = 0;
    let direction = 1; // 1 means moving right, -1 means moving left
    movingDiv.style.display = 'block'; // Show the moving div

    // Move the div back and forth
    const interval = setInterval(() => {
        position += direction * 0.3;
        movingDiv.style.left = `${baseLeft + position / 10}%`; // Adjust position
        if (position >= 7 || position <= -7) {
            direction *= -1; // Reverse direction
        }
    }, 10);

    return interval; // Return the interval ID for stopping
}

// Function to stop moving the div and hide it
function stopMovingDiv(movingDiv, interval) {
    clearInterval(interval); // Stop the interval
    movingDiv.style.display = 'none'; // Hide the moving div
}

// Add event listeners to control each div
let intervals = [];
buttonArea.addEventListener('mouseenter', () => {
    intervals[0] = startMovingDiv(movingDivs[0].element, movingDivs[0].baseLeft);
});
buttonArea.addEventListener('mouseleave', () => {
    stopMovingDiv(movingDivs[0].element, intervals[0]);
});
linkArea.addEventListener('mouseenter', () => {
    intervals[1] = startMovingDiv(movingDivs[1].element, movingDivs[1].baseLeft);
});
linkArea.addEventListener('mouseleave', () => {
    stopMovingDiv(movingDivs[1].element, intervals[1]);
});

// Initialize the moving divs as hidden
movingDivs.forEach(div => div.element.style.display = 'none');
