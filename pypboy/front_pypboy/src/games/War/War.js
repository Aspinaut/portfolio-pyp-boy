import React, { useState, useEffect, useRef } from 'react'
import useInterval from '../useInterval'
import Timer from '../Timer'
import { Deck, DeckBack } from '../Cards'

const CANVAS_WIDTH = 1080
const CANVAS_HEIGHT = 600
const deckBack = new DeckBack()
deckBack.createDeck()
const CARD_WIDTH = deckBack.deck[0].image.width
const CARD_HEIGHT = deckBack.deck[0].image.height
const posDeckP1 = {
  x: (CANVAS_WIDTH / 2) - (CARD_WIDTH * 2),
  y: (CANVAS_HEIGHT / 2) - (CARD_HEIGHT / 2)
}
const posCardP1 = {
  x: (CANVAS_WIDTH / 2) - (CARD_WIDTH ),
  y: (CANVAS_HEIGHT / 2) - (CARD_HEIGHT / 2)
}
const posDeckP2 = {
  x: (CANVAS_WIDTH / 2) + (CARD_WIDTH),
  y: (CANVAS_HEIGHT / 2) - (CARD_HEIGHT / 2)
}
const posCardP2 = {
  x: (CANVAS_WIDTH / 2),
  y: (CANVAS_HEIGHT / 2) - (CARD_HEIGHT / 2)
}
let gameReady = false
let deckP1 = []
let deckP2 = []
let cardP1
let cardP2

function War() {
  const canvasRef = useRef()
  const [lenDeckP1, setLenDeckP1] = useState(26)
  const [lenDeckP2, setLenDeckP2] = useState(26)
  const [winner, setWinner] = useState('')

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
    setLenDeckP1(deckP1.length)
    setLenDeckP2(deckP2.length)
    console.log("P1 sort un " + cardP1.power + " !")
    console.log("P2 sort un " + cardP2.power + " !")

    if (cardP1.power > cardP2.power) {
      setWinner("P1 emporte la manche !")
      console.log("P1 l'emporte !")
      deckP1.unshift(cardP1)
      deckP1.unshift(cardP2)
      console.log(deckP1, deckP2)
      if (deckP2.length === 0) {
        setWinner("P1 remporte la partie !")
        console.log("P1 remporte la partie !")
        gameReady = false
      }
    } else if (cardP1.power < cardP2.power) {
      setWinner("P2 emporte la manche !")
      console.log("P2 l'emporte !")
      deckP2.unshift(cardP1)
      deckP2.unshift(cardP2)
      console.log(deckP1, deckP2)
      if (deckP1.length === 0) {
        setWinner("P2 remporte la partie !")
        console.log("P2 remporte la partie !")
        gameReady = false
      }
    } else {
      deckP1.unshift(cardP1)
      deckP2.unshift(cardP2)
      console.log("Egalité !")
    }
    setLenDeckP1(deckP1.length)
    setLenDeckP2(deckP2.length)
  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    context.drawImage(deckBack.deck[4].image, posDeckP1.x, posDeckP1.y)
    context.drawImage(deckBack.deck[14].image, posDeckP2.x, posDeckP2.y)

    if (cardP1) context.drawImage(cardP1.image, posCardP1.x, posCardP1.y)
    if (cardP2) context.drawImage(cardP2.image, posCardP2.x, posCardP2.y)

    context.fillText(deckP1.length, posDeckP1.x + (CARD_WIDTH / 2), posDeckP1.y)
    context.fillText(deckP2.length, posDeckP2.x + (CARD_WIDTH / 2),  posDeckP2.y)

    document.getElementById('score').innerHTML = `${lenDeckP1} ${lenDeckP2}`
    document.getElementById('winner').innerHTML = `${winner}`
  }, [lenDeckP1, lenDeckP2, winner])

  // attention ! avec setInterval, crée un effet exponentiel...
  useInterval(() => gameLoop(), 1000)

  return (
    <>
      <div className="text-center mt-3">
        <h1 id="score">{lenDeckP1} {lenDeckP2}</h1>
        <h1 id="winner">{winner}</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <canvas
            className="border"
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            ref={canvasRef} >
            Sorry, your browser does not support canvas HTML...
          </canvas>
          <div className="text-center">
          <button onClick={startGame}>Start Game</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default War
