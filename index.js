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

//Creating the Card - creating the card object with a suit, value, and rank to describe the card
//and to be able to use the features of suit, value, and rank
class Card{
  constructor(suit, value, rank){
    this.suit = suit;
    this.value = value;
    this.rank = rank;
  }
}

//this builds the deck as an array, the cards which we will be adding
class Deck {
  constructor(){
    this.deck = [];
  }


//assigns to each suit each of the values and also the ranks (the values' indices starting at 2)
createDeck(){
  for (let i = 0; i < SUITS.length; i ++){
    for (let j = 0; j < VALUES.length; j++){
      //for each element in a new array every value will be matched with each suit
      this.deck.push(new Card(SUITS[i], VALUES[j], (j+2)));
       }
      }//console.log(this.deck[0].value);
    }
    
//every time the deck is shuffled it starts from the 
//index of a card chosen randomly    
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
//creation of the player object assigned a name, hand, and score
    class Player{ 
    constructor(playerName, playerHand, score) {
      this.playerName = playerName;
      this.playerHand = playerHand; 
      this.score = score;
  
    }
  
      
  }
//this is where the parts of the game, the players and the deck come together in the 
//GameLogic object. The function startGame includes the function create deck and shuffle deck.
//The deal function assigns the players and the hands to each of the deck halves.
//The compareCards function matches one card from each deck at a time and 
//assigns a point to the highest ranking card. It also adds the points from each 
//players scores to determine the winner or a tie. 
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
  


    /*compareCards (){
    for(let i = 0; i < 26; i++){
      if(this.player1.playerHand[i].rank++ > this.player2.playerHand[i].rank++){
      console.log("Player One Wins");
      } else if (this.player2.playerHand[i].rank++ > this.player1.playerHand[i].rank++){
      console.log("Player Two Wins");
  }}}*/
//this was comparing the two halves of the deck at one time which I built to 
//understand how to complete the assignment
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