import React, { useState, useEffect, useRef } from 'react'
import useInterval from '../useInterval'
import Timer from '../Timer'

const SCALE = 60
const SPEED = 200
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
  const [isActive, setIsActive] = useState(false)
  const canvasRef = useRef()
  // const buttonHeight = 60
  // const buttonWidth = 300

  useInterval(() => gameLoop(), SPEED)

  const gameOver = () => {
    setIsActive(false)
  }

  const checkCollide = () => {
    if (snake[0][0] < 0 || snake[0][1] < 0 || snake[0][0] > CANVAS_WIDTH / SCALE || snake[0][1] > CANVAS_HEIGHT / SCALE) {
      gameOver()
      return true
    }
    return false
  }

  const checkApple = () => {
    if (apple[0] === snake[0][0] && apple[1] === snake[0][1]) {
      setApple([
        Math.floor(Math.random() * (CANVAS_WIDTH / SCALE)),
        Math.floor(Math.random() * (CANVAS_HEIGHT / SCALE)),
      ])
      return true
    }
    // for (let i=1; i < snake.length; i++) {
    //   console.log(snake[0], snake[i])
    //   if (snake[0] === snake[i]) {
    //     console.log("boom")
    //     return true
    //   }
    // }
    return false
  }

  const moveSnake = ({keyCode}) => {
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode])
  }

  const startGame = () => {
    setIsActive(true)
    setSnake(SNAKE_START)
    setApple(APPLE_START)
  }

  const gameLoop = () => {
    if (isActive) {
      const snakeCopy = JSON.parse(JSON.stringify(snake))
      const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]
      snakeCopy.unshift(newSnakeHead)
      if(checkCollide()) gameOver()
      if(!checkApple()) snakeCopy.pop()
      setSnake(snakeCopy)
    }
  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    if (isActive) {
      context.setTransform(SCALE, 0, 0, SCALE, 0, 0)
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      // snake
      context.fillStyle = "pink"
      snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))
      // apple
      context.fillStyle = "lightblue"
      context.fillRect(apple[0], apple[1], 1, 1)
    }
    // else {
      // button
      // context.fillStyle = "green"
      // context.fillRect((canvasRef.current.width / 2) - (buttonWidth / 2), (canvasRef.current.height / 2) - (buttonHeight / 2), buttonWidth, buttonHeight)
      // context.fillStyle = "black"
      // context.fillText("Start Game", (canvasRef.current.width / 2) - (buttonWidth / 2), (canvasRef.current.height / 2) - (buttonHeight / 2))
      // canvasRef.current.addEventListener('click', (mouseEvent) => {
      //   const rect = canvasRef.current.getBoundingClientRect()
      //   const x = mouseEvent.clientX - rect.left
      //   const y = mouseEvent.clientY - rect.top
      //   if ((x >= (canvasRef.current.width / 2) - (buttonWidth / 2))
      //   && (y >= (canvasRef.current.height / 2) - (buttonHeight / 2))
      //   && (x <= (canvasRef.current.width / 2) + (buttonWidth / 2))
      //   && (y <= (canvasRef.current.height / 2) + (buttonHeight / 2))) {
      //     startGame()
      //   }
      // })
    // }
  }, [snake, apple, isActive])

  return (
    <>
      <div className="text-center mt-3">
        <Timer isActive={isActive}/>
      </div>
      <div className="d-flex justify-content-center">
        <div role="button" tabIndex="0" onKeyDown={key => moveSnake(key)}>
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

export default Snake
