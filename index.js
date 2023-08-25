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
      }//console.log(this.deck[0].value);
    }
    
    shuffleDeck(){
      let oldIndex = "";
      for (let i = this.deck.length - 1; i > 0; i--){
        let randomVar = Math.floor(Math.random() * (i + 1));
        //console.log(randomVar);
        oldIndex = this.deck[i];
        this.deck[i] = this.deck[randomVar];
        this.deck[randomVar] = oldIndex;
      }
      //console.log(this.deck[0]);
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
        console.log("Game Begins!");
        this.gameDeck.createDeck();
        this.gameDeck.shuffleDeck();
      }  
      
     deal(){
      this.player1.playerHand = this.gameDeck.deck.slice(0, 26);
      this.player2.playerHand = this.gameDeck.deck.slice(26, 52);
      console.log(this.player1, this.player2);
    }
     compareCards(){
      
      let scoreOneTotal = "";
      let scoreTwoTotal = "";        
      for (let a = 0; a < 26; a++){
        
        if(this.player1.playerHand[a].rank > this.player2.playerHand[a].rank){
        this.player1.score = 1;
        this.player2.score = 0;
        scoreOneTotal++;
        
        } else {
          this.player2.score = 1;
          this.player1.score = 0;
          scoreTwoTotal++;
          
         
        } 

        console.log(`Player One Value: ${this.player1.playerHand[a].value}, Suit: ${this.player1.playerHand[a].suit} --- Player Two Value: ${this.player2.playerHand[a].value}, Suit: ${this.player2.playerHand[a].suit}`);
        console.log(`Score: ${this.player1.score} --- Score: ${this.player2.score}`);
      }
      console.log(`${this.player1.playerName} Total: ${scoreOneTotal} --- ${this.player2.playerName} Total: ${scoreTwoTotal}`);
      if (scoreOneTotal > scoreTwoTotal){
        console.log(`${this.player1.playerName} wins!`);
      } else if (scoreTwoTotal > scoreOneTotal) {
        console.log(`${this.player2.playerName} wins!`);
      } else {
        console.log("Tie!");
  }
  }
  };  
  


    /*compareCards(){
    for(let i = 0; i < 26; i++){
      if(this.player1.playerHand[i].rank++ > this.player2.playerHand[i].rank++){
      console.log("Player One Wins");
      } else if (this.player2.playerHand[i].rank++ > this.player1.playerHand[i].rank++){
      console.log("Player Two Wins");
  }}}*/

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