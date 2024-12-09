function goToSpecificPage() {
    window.location.href = "../pages/LoginPage.html";
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


    // Função para abrir o popup ao clicar no search icon
    chatIcon.addEventListener("click", () => {
        const popupWidth = 1000; // Largura do popup
        const popupHeight = 800; // Altura do popup

        // Calcular a posição para centralizar o popup
        const screenLeft = window.screenLeft || window.screenX;
        const screenTop = window.screenTop || window.screenY;

        const screenWidth =
            window.innerWidth || document.documentElement.clientWidth || screen.width;
        const screenHeight =
            window.innerHeight || document.documentElement.clientHeight || screen.height;

        const left = screenLeft + (screenWidth - popupWidth) / 2 + 45;
        const top = screenTop + (screenHeight - popupHeight) / 2;

        // Abrir um popup vazio
        window.open(
            "about:blank",
            "popupWindow",
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`
        );
    });

    const imageSets = [
        {
            images: [
                "../resources/images/Games/OurGames/Snake.png",
                "../resources/images/Games/OurGames/FlappyGhost.png",
                "../resources/images/Games/OurGames/LNM BG.png",
                "../resources/images/Games/OurGames/Tetris.png",
            ],
            links: [
                "../../jogos/SnakeGame/SnakeGameWeb/index.html",
                "../../jogos/FlappyBirdWebGL/index.html",
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
    let isSearching = false; // Flag para controlar se estamos pesquisando

    // Função para inicializar a grid combinada (apenas para pesquisa)
    function initializeCombinedImageGrid(filteredGames = []) {
        imageGrid.innerHTML = ''; // Limpar a grid

        // Exibir apenas 4 jogos por vez, durante a pesquisa
        const gamesToDisplay = filteredGames.slice(0, 4);
        
        gamesToDisplay.forEach(game => {
            const link = document.createElement('a');
            link.classList.add("image-placeholder-link");
            link.setAttribute("data-popup", game.link);
            link.setAttribute("data-name", game.name.toLowerCase());

            const placeholder = document.createElement('div');
            placeholder.classList.add("image-placeholder");

            const img = document.createElement("img");
            img.src = game.image;

            placeholder.appendChild(img);
            link.appendChild(placeholder);
            imageGrid.appendChild(link);

            // Adicionar funcionalidade de clique para abrir no popup
            link.addEventListener('click', (event) => {
                event.preventDefault();
                openPopup(game.link);
            });
        });
    }

    // Função para restaurar a grid normal, com as setas habilitadas
    function restoreNormalGrid() {
        leftArrow.style.pointerEvents = 'auto';
        rightArrow.style.pointerEvents = 'auto';
        imageGrid.innerHTML = ''; // Limpar a grid

        // Inicializar a grid normal com base no conjunto atual
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

            // Adicionar funcionalidade de clique para abrir no popup
            link.addEventListener('click', (event) => {
                event.preventDefault();
                openPopup(currentSet.links[index]);
            });
        });
    }

    // Função para manipular as setas quando não estamos pesquisando
    function handleArrowNavigation() {
        leftArrow.addEventListener("click", () => {
            if (!isSearching) {
                currentSetIndex =
                    currentSetIndex === 0 ? imageSets.length - 1 : currentSetIndex - 1;
                restoreNormalGrid();
            }
        });

        rightArrow.addEventListener("click", () => {
            if (!isSearching) {
                currentSetIndex =
                    currentSetIndex === imageSets.length - 1 ? 0 : currentSetIndex + 1;
                restoreNormalGrid();
            }
        });
    }

    // Função para abrir o jogo em um popup
    function openPopup(link) {
        const popupWidth = 1000; // Largura do popup
        const popupHeight = 800; // Altura do popup

        // Calcular a posição para centralizar o popup
        const screenLeft = window.screenLeft || window.screenX;
        const screenTop = window.screenTop || window.screenY;

        const screenWidth =
            window.innerWidth || document.documentElement.clientWidth || screen.width;
        const screenHeight =
            window.innerHeight || document.documentElement.clientHeight || screen.height;

        const left = screenLeft + (screenWidth - popupWidth) / 2 + 45;
        const top = screenTop + (screenHeight - popupHeight) / 2;

        // Abrir o popup no centro da tela
        window.open(
            link,
            "popupWindow",
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`
        );
    }

    // Função de pesquisa
    searchBar.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();

        // Filtrando todos os jogos combinados das duas grids
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
            isSearching = true; // Modo de pesquisa ativo
            initializeCombinedImageGrid(filteredGames); // Inicializar a grid com os jogos filtrados
        } else {
            isSearching = false; // Modo de pesquisa desativado
            restoreNormalGrid(); // Restaurar a grid original
        }
    });

    // Inicializar a grid normal
    restoreNormalGrid();
    handleArrowNavigation();
});
