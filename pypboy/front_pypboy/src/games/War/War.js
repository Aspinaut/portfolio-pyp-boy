import React, { useState, useRef, useEffect } from 'react'
import useInterval from '../useInterval'
import Timer from '../Timer'
import { deck, backCards } from '../../assets/images/loadDeck'

const CANVAS_WIDTH = 1080
const CANVAS_HEIGHT = 600

function War() {
  const canvasRef = useRef()

  const startGame = () => {
    console.log("start game !")

  }

  const gameLoop = () => {

  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    let img = new Image()
    img.src = backCards[0].src
    context.drawImage(img , 0, 0)
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
