import Canvas from './Canvas'
// import ImageLoader from './ImageLoader'
// import Sprite from './sprite'

let card = new Image()
card.src = require("../assets/images/deck/cardBack_green5.png")
// let imageLoader = new ImageLoader()
// let listSprites = []

function War() {
  // const load = () => {
  //   console.log("load...")
  //   imageLoader.add("../assets/images/deck/cardBack_green5.png")
  //   console.log(imageLoader.listImages)
  //   imageLoader.start(startGame)
  // }
  // const startGame = () => {
  //   console.log("start game !")
  //   listSprites = []
  //   for (let image of Object.values(imageLoader.getListImages())) {
  //     let mySprite = new Sprite(image, 0, 0)
  //     listSprites.push(mySprite)
  //   }
  // }
  const draw = (ctx) => {
    // listSprites.forEach((sprite, i) => {
    //   sprite.draw(ctx)
    // });
    console.log(card)
    // ctx.drawImage(card, 0, 0)
  }
  // load()
  return <Canvas draw={draw} width="1080" height="600"/>
}

export default War
