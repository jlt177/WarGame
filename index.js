const SUITS = ["♧", "♤", "♡", "♢"];
const VALUES= [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

//Create Card
class Card{
  constructor(suit, value, rank){
    this.suit = suit;
    this.value = value;
    this.rank = rank;
  }
}


class Deck {
  constructor(){
    this.deck = [];
  }



createDeck(){
  for (let i = 0; i < SUITS.length; i ++){
    for (let j = 0; j < VALUES.length; j++){
      //for each element in a new array every value will be matched with each suit
      this.deck.push(new Card(SUITS[i], VALUES[j], (j+2)));
       }
      }console.log(this.deck[0].value);
    }
    
    shuffleDeck(){
      let oldIndex = "";
      for (let i = this.deck.length - 1; i > 0; i--){
        let randomVar = Math.floor(Math.random() * (i + 1));
        console.log(randomVar);
        oldIndex = this.deck[i];
        this.deck[i] = this.deck[randomVar];
        this.deck[randomVar] = oldIndex;
      }
      console.log(this.deck[0]);
    } 
  }

    class Player{ 
    constructor(playerName, playerHand, score) {
      this.playerName = playerName;
      this.playerHand = playerHand; 
      this.score = score;
  
    }
  
      
  }

  class GameLogic{
    constructor(){
      this.player1 = new Player("Jana", [], 0 );
      this.player2 = new Player("Kristina", [], 0);
      this.gameDeck = new Deck();
    }
      startGame(){
        this.gameDeck.createDeck();
        this.gameDeck.shuffleDeck();
      }  
      
     deal(){
      this.player1.playerHand = this.gameDeck.deck.slice(0, 26);
      this.player2.playerHand = this.gameDeck.deck.slice(26, 52);
      console.log(this.player1, this.player2);
    }
    compareCards(){
    let player1Score = 0;
    let player2Score = 0;
    for (this.player1Hand = 0; this.player1Hand < this.player1Hand.length; this.player1Hand++){
      for (this.player2Hand = 0; this.player2Hand < this.player2Hand.length; this.player2Hand++){
      player1Score = this.player1Hand.rank++;
      player2Score = this.player2Hand.rank++;
    
    
    if (player1Score === player2Score){
      console.log("Tie");




      } else if( player1Score > player2Score){
      console.log("Player 1 Winner");
      } else {
      console.log("Player 2 Winner");
      }
  }}}}

  let newGame = new GameLogic();
  newGame.startGame();
  newGame.deal();
  newGame.compareCards();

//   }
// }
// class Game {
//   constructor() {
//     this.deck = [];
//   }

//   start(player1, player2) {

//   }}
// Divide divide shuffled deck in two
// Create two players
// Assign each deck to a player
// Players Iterates through each half of the deck
// *Compare cards value at each iteration
// Add one point to highest player with highest card
// Sum of points compared
// Ties equal zero points for both players, Print such
// Winner is the one with the highest points
// Display players points
// Display winner as the one with the highest points