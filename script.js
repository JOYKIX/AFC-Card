    // Fonction pour créer une carte dans l'album
    function createAlbumCard(cardIndex) {
        // Créer la carte de l'album
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');
        albumCard.id = `albumCard_${cardIndex}`;

        // Ajouter l'image de la carte dans l'album
        const cardImage = new Image();
        cardImage.src = `Card${cardIndex} (Front).jpg`;
        cardImage.classList.add('album-card-image');
        albumCard.appendChild(cardImage);

        // Ajouter le compteur du nombre de cartes
        const cardCount = document.createElement('div');
        cardCount.classList.add('card-count');
        cardCount.textContent = `x${totalCardCount[cardIndex]}`;
        albumCard.appendChild(cardCount);

        albumContainer.appendChild(albumCard);
    }

    // Gestionnaire d'événement pour le drag and drop
    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.dataset.cardIndex);
    }

    function allowDrop(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const cardIndex = event.dataTransfer.getData('text/plain');
        addToAlbum(cardIndex);
    }

    // Monnaie virtuelle
    let flowerOfHibiscus = 500;

    // Coût d'un booster
    const boosterCost = 50;

// Fonction pour vendre les cartes en double à l'agent virtuel
function sellDuplicates() {
    for (const cardIndex in totalCardCount) {
        if (totalCardCount[cardIndex] > 1) {
            const sellingPrice = calculateSellingPrice(cardIndex);
            flowerOfHibiscus += sellingPrice * (totalCardCount[cardIndex] - 1);

            // Sauvegarder le nombre total de cartes restantes après la vente
            const remainingCount = totalCardCount[cardIndex] - 1;

            // Soustraire le nombre de cartes vendues du total
            totalCardCount[cardIndex] = 1;

            // Mettre à jour le texte pour refléter le nombre total de cartes restantes
            updateAlbumCardText(cardIndex);
        }
    }

    // Mettre à jour l'affichage du solde de la monnaie virtuelle
    updateFlowerOfHibiscusDisplay();
}

    // Fonction pour calculer le prix de vente d'une carte en fonction de sa rareté
    function calculateSellingPrice(cardIndex) {
        const rarity = getCardRarity(cardIndex);
        switch (rarity) {
            case 'SSS':
                return 100;
            case 'SPlus':
                return 75;
            case 'S':
                return 50;
            case 'A':
                return 25;
            case 'B':
                return 15;
            case 'C':
                return 10;
            case 'D':
                return 5;
            default:
                return 0;
        }
    }

    // Fonction pour récupérer la rareté d'une carte en fonction de son index
    function getCardRarity(cardIndex) {
        const card = cardData.cards.find(card => card.id === parseInt(cardIndex));
        return card ? card.rarity : '';
    }

    // Fonction pour mettre à jour l'affichage du solde de la monnaie virtuelle
    function updateFlowerOfHibiscusDisplay() {
        const flowerOfHibiscusDisplay = document.getElementById('flowerOfHibiscusDisplay');
        flowerOfHibiscusDisplay.textContent = `Fleur de Bissap : ${flowerOfHibiscus}`;
    }
});

const cardData = {
  "SSS": 0.04,
  "SPlus": 0.4,
  "S": 3.8,
  "A": 9.6,
  "B": 19.2,
  "C": 28.7,
  "D": 38.3,
  "cards": [
    {"id": 0, "rarity": "SSS"},
    {"id": 1, "rarity": "A"},
    {"id": 2, "rarity": "SPlus"},
    {"id": 3, "rarity": "D"},
    {"id": 4, "rarity": "D"},
    {"id": 5, "rarity": "C"},
    {"id": 6, "rarity": "S"},
    {"id": 7, "rarity": "A"},
    {"id": 8, "rarity": "D"},
    {"id": 9, "rarity": "A"},
    {"id": 10, "rarity": "D"},
    {"id": 11, "rarity": "S"},
    {"id": 12, "rarity": "C"},
    {"id": 13, "rarity": "A"},
    {"id": 14, "rarity": "A"},
    {"id": 15, "rarity": "SPlus"},
    {"id": 16, "rarity": "S"},
    {"id": 17, "rarity": "C"},
    {"id": 18, "rarity": "D"},
    {"id": 19, "rarity": "SPlus"},
    {"id": 20, "rarity": "A"},
    {"id": 21, "rarity": "S"},
    {"id": 22, "rarity": "B"},
    {"id": 23, "rarity": "B"},
    {"id": 24, "rarity": "A"},
    {"id": 25, "rarity": "D"},
    {"id": 26, "rarity": "D"},
    {"id": 27, "rarity": "SSS"},
    {"id": 28, "rarity": "SPlus"},
    {"id": 29, "rarity": "S"},
    {"id": 30, "rarity": "S"},
    {"id": 31, "rarity": "B"},
    {"id": 32, "rarity": "SPlus"},
    {"id": 33, "rarity": "A"},
    {"id": 34, "rarity": "S"},
    {"id": 35, "rarity": "S"},
    {"id": 36, "rarity": "S"},
    {"id": 37, "rarity": "C"},
    {"id": 38, "rarity": "B"},
    {"id": 39, "rarity": "SSS"},
    {"id": 40, "rarity": "S"},
    {"id": 41, "rarity": "A"},
    {"id": 42, "rarity": "B"},
    {"id": 43, "rarity": "S"},
    {"id": 44, "rarity": "C"},
    {"id": 45, "rarity": "S"},
    {"id": 46, "rarity": "A"},
    {"id": 47, "rarity": "S"},
    {"id": 48, "rarity": "B"},
    {"id": 49, "rarity": "S"},
    {"id": 50, "rarity": "SSS"},
  ]
};
