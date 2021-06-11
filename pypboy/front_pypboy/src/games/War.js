import Canvas from './Canvas'

function War() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#01491C'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.beginPath()
    // ctx.arc(50, 100, 50*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    // ctx.fill()
  }

  return <Canvas draw={draw} width="1080" height="600"/>
}

export default War
