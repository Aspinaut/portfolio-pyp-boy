import React, { useState, useRef, useEffect } from 'react'
import useInterval from '../useInterval'
import Timer from '../Timer'
import { Deck, DeckBack } from '../Cards'

function War() {
  const CANVAS_WIDTH = 1080
  const CANVAS_HEIGHT = 600
  let deckBack = new DeckBack()
  deckBack.createDeck()
  const CARD_WIDTH = deckBack.deck[0].image.width
  const CARD_HEIGHT = deckBack.deck[0].image.height
  const canvasRef = useRef()
  const [deckP1, setDeckP1] = useState([])
  const [deckP2, setDeckP2] = useState([])
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

  const deal = (deckToDeal) => {
    for (let i=0; i < deckToDeal.length; i++) {
      deckP1.push(deckToDeal[i++])
      deckP2.push(deckToDeal[i])
    }
  }

  const checkGreater = (card1, card2) => {
    if (card1 && card2) {
      card1 > card2 ? setDeckP1(deckP1.push(card1, card2)) : setDeckP2(deckP2.push(card1, card2))
    }
  }

  const startGame = () => {
    console.log("start game !")
    const context = canvasRef.current.getContext("2d")
    let deck = new Deck()
    deck.createDeck()
    deck.shuffle()
    deal(deck.deck)
    context.drawImage(deckBack.deck[4].image, posDeckP1.x, posDeckP1.y)
    context.drawImage(deckBack.deck[14].image, posDeckP2.x, posDeckP2.y)

    canvasRef.current.addEventListener('click', (mouseEvent) => {
      const rect = canvasRef.current.getBoundingClientRect()
      const x = mouseEvent.clientX - rect.left
      const y = mouseEvent.clientY - rect.top
      let cardP1
      let cardP2
      if (((x > posDeckP1.x && x < posDeckP1.x + CARD_WIDTH)
      && (y > posDeckP1.y && y < posDeckP1.y + CARD_HEIGHT))
      || ((x > posDeckP2.x && x < posDeckP2.x + CARD_WIDTH)
      && (y > posDeckP2.y && y < posDeckP2.y + CARD_HEIGHT))) {
        cardP1 = deckP1.pop()
        cardP2 = deckP2.pop()
        context.drawImage(cardP2.image, posCardP2.x, posCardP2.y)
        context.drawImage(cardP1.image, posCardP1.x, posCardP1.y)
        checkGreater(cardP1, cardP2)
      }
    })
  }

  const gameLoop = () => {

  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    // context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    context.fillText(deckP1.length, posDeckP1.x + (CARD_WIDTH / 2), posDeckP1.y)
    context.fillText(deckP2.length, posDeckP2.x + (CARD_WIDTH / 2),  posDeckP2.y)
  })

  // useInterval(() => gameLoop(), 1000)

  return (
    <>
      <div className="text-center mt-3">
        <Timer />
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
