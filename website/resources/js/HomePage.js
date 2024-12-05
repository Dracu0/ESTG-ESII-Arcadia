document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const imageGrid = document.querySelector(".image-grid");
    const menuIcon = document.querySelector(".icon-menu");
    const menuTab = document.getElementById("menu-tab");

    const imageSets = [
        {
            images: [
                "../resources/images/Games/OurGames/Snake.png",
                "../resources/images/Games/OurGames/FlappyGhost.png",
                "../resources/images/Games/OurGames/LNM Background.png",
                "../resources/images/Games/OurGames/image 4.png",
            ],
            links: [
                "Snake.html",
                "FlappyGhost.html",
                "LLM.html",
                "Hazard.html",
            ],
        },
        {
            images: [
                "../resources/images/Games/OurGames/image 5.png",
                "../resources/images/Games/Space Waves.png",
                "../resources/images/Games/Words Of Wonder.png",
                "../resources/images/Games/Jogo Do Galo.png",
            ],
            links: [
                "game5.html",
                "https://www.crazygames.com.br/jogos/space-waves",
                "https://www.crazygames.com.br/jogos/words-of-wonders",
                "https://www.hypatiamat.com/jogos/jogoDoGalo/jogoDoGalo_Vhtml.html",
            ],
        },
    ];

    let currentSetIndex = 0;

    // Initialize the grid
    function initializeImageGrid() {
        const currentSet = imageSets[currentSetIndex];
        const placeholders = imageGrid.querySelectorAll(".image-placeholder-link");

        placeholders.forEach((link, index) => {
            const placeholder = link.querySelector(".image-placeholder");

            if (!placeholder.querySelector("img")) {
                const img = document.createElement("img");
                img.src = currentSet.images[index];
                placeholder.appendChild(img);
            } else {
                placeholder.querySelector("img").src = currentSet.images[index];
            }

            // Update the link
            link.setAttribute("data-popup", currentSet.links[index]);
        });
    }

    // Update the grid on arrow click
    function updateImageGrid() {
        const currentSet = imageSets[currentSetIndex];
        const links = imageGrid.querySelectorAll(".image-placeholder-link");

        links.forEach((link, index) => {
            const img = link.querySelector(".image-placeholder img");
            img.src = currentSet.images[index];
            link.setAttribute("data-popup", currentSet.links[index]);
        });
    }

    // Popup functionality
    function openPopup(link) {
        const popupWidth = 800; // Width of the popup
        const popupHeight = 600; // Height of the popup
    
        // Calculate the position to center the popup
        const screenLeft = window.screenLeft || window.screenX;
        const screenTop = window.screenTop || window.screenY;
    
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;
        const screenHeight = window.innerHeight || document.documentElement.clientHeight || screen.height;
    
        const left = screenLeft + (screenWidth - popupWidth) / 2;
        const top = screenTop + (screenHeight - popupHeight) / 2;
    
        // Open the popup in the center of the screen
        window.open(
            link,
            "popupWindow",
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`
        );
    }

    // Add click event to open in popup
    imageGrid.addEventListener("click", (event) => {
        const linkElement = event.target.closest(".image-placeholder-link");
        if (linkElement) {
            const popupLink = linkElement.getAttribute("data-popup");
            openPopup(popupLink);
            event.preventDefault();
        }
    });

    // Arrow functionality
    leftArrow.addEventListener("click", () => {
        currentSetIndex =
            currentSetIndex === 0 ? imageSets.length - 1 : currentSetIndex - 1;
        updateImageGrid();
    });

    rightArrow.addEventListener("click", () => {
        currentSetIndex =
            currentSetIndex === imageSets.length - 1 ? 0 : currentSetIndex + 1;
        updateImageGrid();
    });

    // Toggle the menu visibility when the menu icon is clicked
    menuIcon.addEventListener("click", () => {
        menuTab.classList.toggle("visible");
    });

    // Initialize on load
    initializeImageGrid();
});
