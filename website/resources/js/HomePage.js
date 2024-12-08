// Function to toggle the chatbot visibility
const chatIcon = document.getElementById('chat-icon');
const popupContainer = document.getElementById('popup-container');

async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatDisplay = document.getElementById('chat-display');

    if (!userInput.value.trim()) return;

    // Add user's message to chat display
    const userMessage = document.createElement('p');
    userMessage.textContent = `You: ${userInput.value}`;
    chatDisplay.appendChild(userMessage);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;

    // Replace 'YOUR_API_KEY' with your actual API key (not recommended for production)
    const apiKey = '';  // Replace with your actual API key

    try {
        // Sending the user input to the OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {  // OpenAI chat completions endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,  // Including the API key in the request headers
            },
            body: JSON.stringify({
                model: 'gpt-4',  // Specify the model you want to use, such as 'gpt-4'
                messages: [
                    { role: 'user', content: userInput.value }  // User's message to the model
                ]
            })
        });

        if (!response.ok) {
            const errorText = await response.text(); // Capture error text for detailed info
            throw new Error(`API Error: ${response.status} - ${response.statusText}\n${errorText}`);
        }

        const data = await response.json();

        // Check if the response contains a valid message
        const botMessage = document.createElement('p');
        botMessage.textContent = `Bot: ${data.choices[0].message.content || 'Sorry, I did not understand that.'}`;
        chatDisplay.appendChild(botMessage);

        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom

    } catch (error) {
        console.error('Error:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Bot: Sorry, there was an error processing your message. Here's more info: \n${error.message}`;
        chatDisplay.appendChild(errorMessage);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    userInput.value = ''; // Clear the input field
}

document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const imageGrid = document.querySelector(".image-grid");
    const menuTab = document.getElementById("menu-tab");
    const searchBar = document.querySelector(".search-bar");
    const chatIcon = document.getElementById("chat-icon");
    const menuCheckbox = document.getElementById("check-icon");

    menuCheckbox.addEventListener("change", () => {
        if (menuCheckbox.checked) {
            menuTab.style.opacity = "1";
            menuTab.style.transform = "translateX(0)";
            menuTab.style.pointerEvents = "auto";
        } else {
            menuTab.style.opacity = "0";
            menuTab.style.transform = "translateX(-20px)";
            menuTab.style.pointerEvents = "none";
        }
    });

    // Open the chatbot popup when clicking on the chat icon
    chatIcon.addEventListener("click", () => {
        if (popupContainer.style.display === 'none' || !popupContainer.style.display) {
            popupContainer.style.display = 'block'; // Show the chatbot
        } else {
            popupContainer.style.display = 'none'; // Hide the chatbot
        }
    });

    const imageSets = [
        {
            images: [
                "../resources/images/Games/OurGames/Snake.png",
                "../resources/images/Games/OurGames/FlappyGhost.png",
                "../resources/images/Games/OurGames/LNM Background.png",
                "../resources/images/Games/OurGames/Tetris.png",
            ],
            links: [
                "Snake.html",
                "FlappyGhost.html",
                "LNM.html",
                "Hazard.html",
            ],
            names: ["Snake", "Flappy Ghost", "Late Night Motorist", "Tetris"],
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
            names: ["Hazard", "Space Waves", "Words of Wonder", "Jogo Do Galo"],
        },
    ];

    let currentSetIndex = 0;
    let isSearching = false;

    function restoreNormalGrid() {
        leftArrow.style.pointerEvents = 'auto';
        rightArrow.style.pointerEvents = 'auto';
        imageGrid.innerHTML = '';  // Clear the grid

        const currentSet = imageSets[currentSetIndex];

        currentSet.images.forEach((image, index) => {
            const link = document.createElement('a');
            link.classList.add("image-placeholder-link");
            link.setAttribute("data-popup", currentSet.links[index]);
            link.setAttribute("data-name", currentSet.names[index].toLowerCase());

            const placeholder = document.createElement('div');
            placeholder.classList.add("image-placeholder");

            const img = document.createElement("img");
            img.src = image;

            placeholder.appendChild(img);
            link.appendChild(placeholder);
            imageGrid.appendChild(link);

            link.addEventListener('click', (event) => {
                event.preventDefault();
                openPopup(currentSet.links[index]);
            });
        });
    }

    // Open the game in a popup
    function openPopup(link) {
        const popupWidth = 1000;
        const popupHeight = 800;

        const screenLeft = window.screenLeft || window.screenX;
        const screenTop = window.screenTop || window.screenY;

        const screenWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;
        const screenHeight = window.innerHeight || document.documentElement.clientHeight || screen.height;

        const left = screenLeft + (screenWidth - popupWidth) / 2 + 45;
        const top = screenTop + (screenHeight - popupHeight) / 2;

        window.open(
            link,
            "popupWindow",
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`
        );
    }

    // Search function
    searchBar.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const allGames = [
            ...imageSets[0].images.map((image, index) => ({
                image,
                link: imageSets[0].links[index],
                name: imageSets[0].names[index]
            })),
            ...imageSets[1].images.map((image, index) => ({
                image,
                link: imageSets[1].links[index],
                name: imageSets[1].names[index]
            }))
        ];

        const filteredGames = allGames.filter(game => game.name.toLowerCase().includes(searchTerm));

        if (searchTerm.length > 0) {
            isSearching = true;
            initializeCombinedImageGrid(filteredGames);
        } else {
            isSearching = false;
            restoreNormalGrid();
        }
    });

    // Initialize the normal grid
    restoreNormalGrid();
});