import React, { useState, useEffect, useRef } from 'react'
import useInterval from './useInterval'

const SCALE = 30
const SNAKE_COLOR = "#BADA55"
const BG_COLOR = "#000000"
const APPLE_COLOR = "#8"
const CANVAS_WIDTH = 1080
const CANVAS_HEIGHT = 600
const SNAKE_START = [[8,8], [8,7]]
const APPLE_START = [5,5]

function Snake() {
  const [snake, setSnake] = useState(SNAKE_START)
  const [apple, setApple] = useState(APPLE_START)
  const canvasRef = useRef()

  const startGame = () => {

  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0)
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    context.fillStyle = "pink"
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))
    context.fillStyle = "lightblue"
    context.fillRect(apple[0], apple[1], 1, 1)
  }, [snake, apple])

  return (
    <div className="d-flex justify-content-center mt-5">
      <canvas
        className="border"
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        ref={canvasRef}
      />
    </div>
  )
}

export default Snake
