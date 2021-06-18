import React, { useState, useRef, useEffect } from 'react'
import useInterval from '../useInterval'
import Timer from '../Timer'
import { Deck, DeckBack } from '../Cards'

function War() {
  const CANVAS_WIDTH = 1080
  const CANVAS_HEIGHT = 600
  const deckBack = new DeckBack()
  deckBack.createDeck()
  const CARD_WIDTH = deckBack.deck[0].image.width
  const CARD_HEIGHT = deckBack.deck[0].image.height
  const canvasRef = useRef()
  const [deckP1, setDeckP1] = useState([])
  const [deckP2, setDeckP2] = useState([])
  const [cardP1, setCardP1] = useState(null)
  const [cardP2, setCardP2] = useState(null)
  const [gameReady, setGameReady] = useState(false)
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
      setDeckP1(deckP1.push(deckToDeal[i++]))
      setDeckP2(deckP2.push(deckToDeal[i]))
    }
  }

  const checkGreater = (card1, card2) => {
    if (card1 && card2) {
      card1.power > card2.power ? setDeckP1(deckP1.unshift(card1, card2)) : setDeckP2(deckP2.unshift(card1, card2))
    }
  }

  const startGame = () => {
    console.log("start game !")
    let deck = new Deck()
    deck.createDeck()
    deck.shuffle()
    deal(deck.deck)
    setGameReady(true)
  }

  const gameLoop = () => {
    if (gameReady) {
      canvasRef.current.addEventListener('click', (mouseEvent) => {
        const rect = canvasRef.current.getBoundingClientRect()
        const x = mouseEvent.clientX - rect.left
        const y = mouseEvent.clientY - rect.top

        if (((x > posDeckP1.x && x < posDeckP1.x + CARD_WIDTH)
        && (y > posDeckP1.y && y < posDeckP1.y + CARD_HEIGHT))
        || ((x > posDeckP2.x && x < posDeckP2.x + CARD_WIDTH)
        && (y > posDeckP2.y && y < posDeckP2.y + CARD_HEIGHT))) {
          // setCardP1(deckP1.pop())
          // setCardP2(deckP2.pop())
          setCardP1(deckP1[deckP1.length - 1])
          setCardP2(deckP2[deckP2.length - 1])
          console.log(cardP1, cardP2)
          console.log("P1 sort un " + cardP1.power + " !")
          console.log("P2 sort un " + cardP2.power + " !")
          setInterval(() => checkGreater(cardP1, cardP2), 3000)
        }
      })
    }
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
  })

  useInterval(() => gameLoop(), 1000)

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
