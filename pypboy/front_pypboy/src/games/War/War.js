import React, { useState, useRef, useEffect } from 'react'
import useInterval from '../useInterval'
import Timer from '../Timer'
import { Deck, DeckBack } from '../Cards'

const CANVAS_WIDTH = 1080
const CANVAS_HEIGHT = 600

function War() {
  const canvasRef = useRef()
  let deck = new Deck()
  let deckBack = new DeckBack()
  deck.createDeck()
  deckBack.createDeck()

  const startGame = () => {
    console.log("start game !")

  }

  const gameLoop = () => {

  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    // context.drawImage(deck.deck[51].image,0 ,0)
    // context.drawImage(deckBack.deck[15].image,50 ,50)
  },[])

  useInterval(() => gameLoop(), 1000 / 60)

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
