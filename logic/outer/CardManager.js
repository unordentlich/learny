const fs = require('fs');
const path = require('path');

class CardManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.cards = this.loadCards();
    }

    loadCards() {
        try {
            if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, JSON.stringify([]), 'utf8');
            }
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading the file:', err);
            return [];
        }
    }

    saveCards() {
        try {
            const data = JSON.stringify(this.cards, null, 2);
            fs.writeFileSync(this.filePath, data, 'utf8');
        } catch (err) {
            console.error('Error writing to the file:', err);
        }
    }

    getCards() {
        return this.cards;
    }

    getCard(id) {
        return this.cards.find(card => card.id === id);
    }

    editCard(id, newCard) {
        const index = this.cards.findIndex(card => card.id === id);
        if (index !== -1) {
            this.cards[index] = newCard;
            this.saveCards();
        }
    }

    addCard(card) {
        if(this.getCard(card.id)) {
            this.editCard(card.id, card);
            return;
        }
        this.cards.push(card);
        this.saveCards();
    }

    setCards(newCards) {
        this.cards = newCards;
        this.saveCards();
    }
}

module.exports = CardManager;

// Usage example:
// const cardManager = new CardManager(path.join(__dirname, 'cards.json'));
// console.log(cardManager.getCards());
// cardManager.setCards([{ id: 1, name: 'Card 1' }]);