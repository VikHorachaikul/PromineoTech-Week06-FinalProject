// Define the Card class
class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }
  }
  
  // Defining the Deck class where cards has an array holding all the cards in the deck, ranks from 2-Ace, and suits with symbols copied from google
  // the for...in loop iterates over the properties in array suit and rank respectively.
  class Deck {
    constructor() {
      this.cards = [];
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const suits = ['♠', '♥', '♦', '♣'];
      for (let suit of suits) {
        for (let rank of ranks) {
          this.cards.push(new Card(rank, suit));
        }
      }
      this.shuffle();
    }
  //shuffle() method was the most effecient way of shuffling a deck I found in an library where it is initialized at the last card of the deck, continues as long
  //there is more than 0 cards in the deck and i-- decrements the index. 
  //This helps create more randomness in a deck
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  // drawing a card which removes a card from the deck via .pop() method
    drawCard() {
      return this.cards.pop();
    }
  
    get length() {
      return this.cards.length;
    }
  }
  
  // Define the Player class
  class Player {
    constructor(name) {
      this.name = name;
      this.points = 0;
      this.hand = [];
    }
  
    playCard() {
      return this.hand.pop();
    }
  
    addPoints(points) {
      this.points += points;
    }
  
    get score() {
      return this.points;
    }
  
    get handSize() {
      return this.hand.length;
    }
  }
  
  // Define the Game class
  class Game {
    constructor() {
      this.deck = new Deck();
      this.player1 = new Player('Player 1');
      this.player2 = new Player('Player 2');
      this.dealCards();
    }
  
    dealCards() {
      while (this.deck.length > 0) {
        this.player1.hand.push(this.deck.drawCard());
        this.player2.hand.push(this.deck.drawCard());
      }
    }
  
    playTurn() {
      const card1 = this.player1.playCard();
      const card2 = this.player2.playCard();
      const rank1 = this.getRankValue(card1.rank);
      const rank2 = this.getRankValue(card2.rank);
      if (rank1 > rank2) {
        this.player1.addPoints(1);
        
      } else if (rank1 < rank2) {
        this.player2.addPoints(1);
        
      }
    }
  
    getRankValue(rank) {
      const values = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
      };
      return values[rank];
    }
   
    playGame() {
      while (this.player1.handSize > 0 && this.player2.handSize > 0) {
        this.playTurn();
      }
      this.displayScore();
    }
  
    displayScore() {
      console.log(`${this.player1.name}: ${this.player1.score}`);
      console.log(`${this.player2.name}: ${this.player2.score}`);

      

//displayScore will display each players score in the console for each round dynamically when page is refreshed and the if statement below will type out who won
//each round or if it is a tie
      if(this.player1.score > this.player2.score) {
        console.log("Player 1 wins the game!");
      } else if (this.player1.score < this.player2.score){
        console.log("Player 2 wins the game!");
      } else {
        console.log("The game is a tie!");
      }
    }
  }
  const gameRounds = 26;



  
  // Run the game
  const game = new Game();
  game.playGame();





  //unit testing for script.js
  const chai = ('chai');
const { Test } = ('mocha');
  const expect = chai.expect;

  describe('Deck', () => {
    it('should correctly shuffle the deck', () => {

    });
  })

  describe('Player', () => {
    it('should correctly return player 1 card', () => {

    });
    it('should correctly return player 2 card', () => {

    });

  });

  describe('Card', () => {
    it('should correctly produce a card with a suit and a value',() => {

    });
  });


  