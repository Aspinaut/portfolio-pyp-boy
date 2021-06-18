import React, { useState, useEffect } from 'react'

class Card {
  constructor(suit, value, power) {
    this.suit = suit
    this.value = value
    this.power = power
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

const suits = ["C", "S", "H", "D"]
const values = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]
let gameReady = false
let deckP1 = []
let deckP2 = []
let cardP1
let cardP2

function startGame() {
  console.log("Start Game !")
  let deck = new Deck()
  deck.createDeck()
  deck.shuffle()
  for (let i=0; i < deck.deck.length; i++) {
    deckP1.push(deck.deck[i++])
    deckP2.push(deck.deck[i])
  }
  gameReady = true
  console.log(deckP1.length, deckP2.length)
}

function gameLoop() {
  if (!gameReady) return
  console.log("game is looping...")
  cardP1 = deckP1.pop()
  cardP2 = deckP2.pop()
  console.log("P1 sort un " + cardP1.power + " !")
  console.log("P2 sort un " + cardP2.power + " !")

  if (cardP1.power > cardP2.power) {
    console.log("P1 l'emporte !")
    deckP1.unshift(cardP1)
    deckP1.unshift(cardP2)
    console.log(deckP1, deckP2)
    if (deckP2.length === 0) {
      console.log("P1 remporte la partie !")
      gameReady = false
    }
  } else if (cardP1.power < cardP2.power) {
    console.log("P2 l'emporte !")
    deckP2.unshift(cardP1)
    deckP2.unshift(cardP2)
    console.log(deckP1, deckP2)
    if (deckP1.length === 0) {
      console.log("P2 remporte la partie !")
      gameReady = false
    }
  } else {
    deckP1.unshift(cardP1)
    deckP2.unshift(cardP2)
    console.log("Egalité !")
  }
}

setInterval(() => gameLoop(), 3000)

function CorsicanWar() {

  useEffect(() => {

  })


  return (
    <div className="text-center mt-5">
      <h1>Corsican War !</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export default CorsicanWar
