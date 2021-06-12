import React, { useRef, useEffect } from 'react'

const useCanvas = (draw) => {

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d', { alpha: false })
    // let frameCount = 0
    // let animationFrameId

    const render = () => {
      draw(context)

      // frameCount++
      // draw(context, frameCount)
      // animationFrameId = window.requestAnimationFrame(render)

    }
    render()

    return () => {
      // window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

const Canvas = (props) => {

  const { draw, width, height, ...rest } = props
  const canvasRef = useCanvas(draw)

  return (
    <div className="d-flex justify-content-center mt-5">
      <canvas className="canvas" width={width} height={height} ref={canvasRef} {...rest}>
        Sorry, your browser does not support canvas...
      </canvas>
    </div>
  )
}

export default Canvas
