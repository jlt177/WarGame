const expect = chai.expect
const assert = chai.assert

describe('WarGame week 6: ', () => {
  describe('Create Deck function', () => {
    
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
    class Card {
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
            this.deck.push(new Card(SUITS[i], VALUES[j], (j+2)));
          }
        } console.log(this.deck)
      }
    }
    it('#Should return a card with a suit, value, and rank', () => {
    let newDeck = new Deck()
    newDeck.createDeck()
    expect(newDeck).to.deep.include(["♧", "2", 2]);
    })
  })
})
/*I attempted to create a mocha and chai test for one of my functions
but I didn't understand how to 1) isolate one card with the function that 
I have and 2) the correct syntax for the suit, value, and rank of that one card
so my test fails*/
