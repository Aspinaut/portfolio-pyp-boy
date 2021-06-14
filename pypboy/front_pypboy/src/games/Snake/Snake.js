import React, { useState, useEffect, useRef } from 'react'
import useInterval from '../useInterval'
import Timer from '../Timer'

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
  // const [timer, setTimer] = useState(0)
  // const [sec, setSec] = useState('00')
  // const [min, setMin] = useState('00')
  const [snake, setSnake] = useState(SNAKE_START)
  const [apple, setApple] = useState(APPLE_START)
  const [dir, setDir] = useState([0, -1])
  const canvasRef = useRef()

  useInterval(() => gameLoop(), SPEED)
  // useInterval(() => Timer(), 1000)
  //
  // const Timer = () => {
  //   setTimer(timer + 1)
  //   parseInt(sec) < 9 ? setSec(`0${parseInt(sec) + 1}`) : setSec(parseInt(sec) + 1)
  //   if (parseInt(sec) / 59 === 1) {
  //     setSec('00')
  //     parseInt(min) < 9 ? setMin(`0${parseInt(min) + 1}`) : setMin(parseInt(min) + 1)
  //   }
  // }

  const moveSnake = ({keyCode}) => {
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode])
  }

  const startGame = () => {

  }

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake))
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]
    snakeCopy.unshift(newSnakeHead)
    snakeCopy.pop()
    setSnake(snakeCopy)
  }

  const gameMenu = () => {
    return (
      <>
        <div role="button">Start Game</div>
      </>
    )
  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0)
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    // snake
    context.fillStyle = "pink"
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))
    // apple
    context.fillStyle = "lightblue"
    context.fillRect(apple[0], apple[1], 1, 1)
    // timer
    context.transform(0.1, 0, 0, 0.1, 0, 0)
    context.fillStyle = "#14fe17"
    // context.fillText(min + " : " + sec, 3, 12)
    // context.fillText("Start Game", 15, 15)
  }, [snake, apple]) // ! add [... , timer, min, sec]

  return (
    <>
      <div className="text-center mt-3">
        <Timer />
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
        </div>
      </div>
    </>
  )
}

export default Snake
