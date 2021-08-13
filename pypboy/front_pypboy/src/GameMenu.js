import { Link } from 'react-router-dom'
import images from './assets/images/index.js'
import War from './games/War/War'
import Snake from './games/Snake/Snake'
import CorsicanWar from './games/CorsicanWar/CorsicanWar'

function GameMenuCard(props) {
  const { name, description, image, endpoint } = props
  return (
    <div className="card ms-3 w-25">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
        <a href={`/play/${endpoint}`} className="btn btn-primary">Play</a>
      </div>
    </div>
  )
}

function GameMenu() {
  const gameList = [
    {
      name: "Snake",
      component: Snake,
      description: "Let eat those delicious apples...",
      image: images.Snake,
      endpoint: "snake"
    },
    {
      name: "War",
      component: War,
      description: "A simple well-known game...",
      image: images.VaultBoyPlayingCards,
      endpoint: "salon"
    },
    {
      name: "CorsicanWar",
      component: CorsicanWar,
      description: "Be faster than your opponent and win all of his cards !",
      image: images.VaultBoyPlayingCards,
      endpoint: "corsicanwar"
    },
  ]
  return (
    <>
      <div className="text-center mt-3 gameMenu">
        <div className="jumbotron">
          <h1>Let's Play !</h1>
        </div>
        <div className="container card-list">
          <div className="d-flex justify-content-center row row-cols-md-3 g-3">
            {gameList.map((game) =>
              <GameMenuCard name={game.name} description={game.description} image={game.image} endpoint={game.endpoint} component={game.component}/>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default GameMenu
