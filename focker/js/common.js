class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    getValue() {
        if (this.rank === 'A') {
            return 14;
        } else if (this.rank === 'K') {
            return 13;
        } else if (this.rank === 'Q') {
            return 12;
        } else if (this.rank === 'J') {
            return 11;
        } else {
            return parseInt(this.rank);
        }
    }
}
class Deck {
    constructor() {
        this.cards = [];

        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }

        this.shuffle();
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw() {
        return this.cards.pop();
    }
}
class Hand {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    getValues() {
        const values = [];

        for (let card of this.cards) {
            values.push(card.getValue());
        }

        return values;
    }

    getScore() {
        let score = 0;
        let hasAce = false;

        for (let value of this.getValues()) {
            if (value === 14) {
                hasAce = true;
            }

            score += value;
        }

        if (hasAce && score <= 11) {
            score += 10;
        }

        return score;
    }
}
class Game {
    constructor() {
        this.deck = new Deck();
        this.playerHand = new Hand();
        this.dealerHand = new Hand();
        this.gameOver = false;
    }

    start() {
        this.playerHand.addCard(this.deck.draw());
        this.playerHand.addCard(this.deck.draw());
        this.dealerHand.addCard(this.deck.draw());
        console.log('Player:', this.playerHand.getScore());
        console.log('Dealer:', this.dealerHand.getValues()[0]);

        while (!this.gameOver) {
            const hitOrStand = prompt('Hit or stand? (h/s)').toLowerCase();

            if (hitOrStand === 'h') {
                this.playerHand.addCard(this.deck.draw());
                console.log('Player:', this.playerHand.getScore());

                if (this.playerHand.getScore() > 21) {
                    console.log('Player busts! Dealer wins!');
                    this.gameOver = true;
                }
            } else {
                while (this.dealerHand.getScore() < 17) {
                    this.dealerHand.addCard(this.deck.draw());
                }

                console.log('Dealer:', this.dealerHand.getScore());

                if (this.dealerHand.getScore() > 21) {
                    console.log('Dealer busts! Player wins!');
                } else if (this.dealerHand.getScore() > this.playerHand.getScore()) {
                    console.log('Dealer wins!');
                } else if (this.dealerHand.getScore() < this.playerHand.getScore()) {
                    console.log('Player wins!');
                } else {
                    console.log('Push!');
                }

                this.gameOver = true;
            }
        }
    }
}

const game = new Game();
game.start();
