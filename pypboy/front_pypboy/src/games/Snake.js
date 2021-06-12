import React, { useState, useEffect, useRef } from 'react'
import useInterval from './useInterval'

const SCALE = 30
const SPEED = 250
const CANVAS_WIDTH = 1080
const CANVAS_HEIGHT = 600
const SNAKE_START = [[8,8], [8,7]]
const APPLE_START = [5,5]
const DIRECTIONS = {
  37: [-1, 0], // left
  38: [0, -1], // up
  39: [1, 0], // right
  40: [0, 1] // down
}

function Snake() {
  const [snake, setSnake] = useState(SNAKE_START)
  const [apple, setApple] = useState(APPLE_START)
  const [dir, setDir] = useState([0, -1])
  const canvasRef = useRef()

  useInterval(() => gameLoop(), SPEED)

  const moveSnake = ({keyCode}) => {
    console.log(keyCode)
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode])
  }

  const startGame = () => {

  }

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    snakeCopy.pop()
    setSnake(snakeCopy)
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
      <div role="button" tabIndex="0" onKeyDown={key => moveSnake(key)}>
        <canvas
          className="border"
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          ref={canvasRef}
        />
      </div>
    </div>
  )
}

export default Snake
