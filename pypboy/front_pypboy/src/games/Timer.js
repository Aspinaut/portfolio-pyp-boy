import React, { useState } from 'react'
import useInterval from './useInterval'


const Timer = () => {
  const [timer, setTimer] = useState(0)
  const [sec, setSec] = useState('00')
  const [min, setMin] = useState('00')

  useInterval(() => {
    setTimer(timer + 1)
    parseInt(sec) < 9 ? setSec(`0${parseInt(sec) + 1}`) : setSec(parseInt(sec) + 1)
    if (parseInt(sec) / 59 === 1) {
      setSec('00')
      parseInt(min) < 9 ? setMin(`0${parseInt(min) + 1}`) : setMin(parseInt(min) + 1)
    }
  }, 1000)
  return (
    <>
      <h3>{min} : {sec}</h3>
    </>
  )
}

export default Timer
