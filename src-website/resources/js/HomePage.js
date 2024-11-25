// JavaScript to toggle the menu with animation
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".icon-menu");
    const menuTab = document.querySelector(".menu-tab");

    menuIcon.addEventListener("click", () => {
        menuTab.classList.toggle("visible");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const imageGrid = document.querySelector(".image-grid");

    // Define image sets (initial 4 images)
    const imageSets = [
        ["../resources/images/HomePage/image1.jpg", "../resources/images/HomePage/image2.jpg", "../resources/images/HomePage/image3.jpg", "../resources/images/HomePage/image4.jpg"],
        ["../resources/images/HomePage/image5.jpg", "../resources/images/HomePage/image6.jpg", "../resources/images/HomePage/image7.jpg", "../resources/images/HomePage/image8.jpg"]
    ];

    let currentSetIndex = 0;

    // Function to initialize the grid with the current set of images
    function initializeImageGrid() {
        const currentSet = imageSets[currentSetIndex];
        const placeholders = imageGrid.querySelectorAll(".image-placeholder");

        placeholders.forEach((placeholder, index) => {
            // Create an img element and append it to each placeholder
            if (!placeholder.querySelector("img")) {
                const img = document.createElement('img');
                img.src = currentSet[index];
                placeholder.appendChild(img);
            } else {
                placeholder.querySelector("img").src = currentSet[index]; // Update img src if already exists
            }
        });
    }

    // Function to update the images when arrows are clicked
    function updateImageGrid() {
        const currentSet = imageSets[currentSetIndex];
        const imageItems = imageGrid.querySelectorAll(".image-placeholder img");

        // Loop through the image placeholders and update their src
        imageItems.forEach((image, index) => {
            image.src = currentSet[index]; // Replace image src with new set
        });
    }

    // Event listener for the left arrow
    leftArrow.addEventListener("click", () => {
        currentSetIndex = (currentSetIndex === 0) ? imageSets.length - 1 : currentSetIndex - 1;
        updateImageGrid();
    });

    // Event listener for the right arrow
    rightArrow.addEventListener("click", () => {
        currentSetIndex = (currentSetIndex === imageSets.length - 1) ? 0 : currentSetIndex + 1;
        updateImageGrid();
    });

    // Initialize the image grid with the first set of images
    initializeImageGrid();
});
