import { Link } from 'react-router-dom'
import images from './assets/images/index.js'
import War from './games/War'
import Snake from './games/Snake'
import CorsicanWar from './games/CorsicanWar'

function GameMenuCard(props) {
  const { name, description, image, endpoint } = props
  return (
    <div className="card ms-3 w-25">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">{name}</h3>
        <p class="card-text">{description}</p>
        <Link to={`/play/${endpoint}`} className="btn btn-primary">Play</Link>
      </div>
    </div>
  )
}

function GameMenu() {
  const gameList = [
    {
      name: "Snake",
      component: Snake,
      description: "A simple well-known game...",
      image: images.VaultBoyPlayingCards,
      endpoint: "snake"
    },
    {
      name: "War",
      component: War,
      description: "A simple well-known game...",
      image: images.VaultBoyPlayingCards,
      endpoint: "war"
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
