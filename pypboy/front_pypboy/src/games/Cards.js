const suits = ["C", "S", "H", "D"]
const values = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]

function importAll(r) {
  let images = {}
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item) })
  return images
}

const images = importAll(require.context('../assets/images/deck', false, /\.(png|jpe?g|svg)$/))

const backCards = [
  {card:"backBlue1", src: images['cardBack_blue1.png'].default},
  {card:"backBlue2", src: images['cardBack_blue2.png'].default},
  {card:"backBlue3", src: images['cardBack_blue3.png'].default},
  {card:"backBlue4", src: images['cardBack_blue4.png'].default},
  {card:"backBlue5", src: images['cardBack_blue5.png'].default},

  {card:"backGreen1", src: images['cardBack_green1.png'].default},
  {card:"backGreen2", src: images['cardBack_green2.png'].default},
  {card:"backGreen3", src: images['cardBack_green3.png'].default},
  {card:"backGreen4", src: images['cardBack_green4.png'].default},
  {card:"backGreen5", src: images['cardBack_green5.png'].default},

  {card:"backRed1", src: images['cardBack_red1.png'].default},
  {card:"backRed2", src: images['cardBack_red2.png'].default},
  {card:"backRed3", src: images['cardBack_red3.png'].default},
  {card:"backRed4", src: images['cardBack_red4.png'].default},
  {card:"backRed5", src: images['cardBack_red5.png'].default},

  {card:"Joker", src: images['cardJoker.png'].default},
]

class Card {
  constructor(suit, value, power) {
    this.suit = suit
    this.value = value
    this.image = new Image()
    this.image.src = images[`${this.value}${this.suit}.png`].default
    this.power = power
  }
}

class BackCard {
  constructor(card, src) {
    this.card = card
    this.image = new Image()
    this.image.src = src
  }
}

class DeckBack {
  constructor() {
    this.deck = []
  }
  createDeck() {
    for (let backCard of backCards) {
      this.deck.push(new BackCard(backCard.card, backCard.src))
    }
  }
}

class Deck {
  constructor() {
    this.deck = []
  }

  shuffle() {
    for (let count=this.deck.length - 1; count >= 0; count--) {
      let temp = this.deck[count]
      let rnd = Math.floor(Math.random() * count)
      this.deck[count] = this.deck[rnd]
      this.deck[rnd] = temp
    }
  }

  createDeck() {
    for (let suit of suits) {
      let power = 2
      for (let value of values) {
        this.deck.push(new Card(suit, value, power))
        power++
      }
    }
  }
}

export { Deck, DeckBack}
