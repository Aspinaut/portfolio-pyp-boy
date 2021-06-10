import React, { useRef, useEffect } from 'react'


const useCanvas = (draw) => {

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

const Canvas = props => {

  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)

  return <canvas ref={canvasRef} {...rest}/>
}

function War() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    // ctx.fillStyle = '#01491C'
    // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.beginPath()
    ctx.arc(50, 100, 50*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  return <Canvas draw={draw} />

}

export default War
