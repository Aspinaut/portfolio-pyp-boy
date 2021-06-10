import {
  Link
} from 'react-router-dom'

function GameMenuCard(props) {
  return (
    <div className="card ms-3 w-25">
      <img src={props.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.game}</h5>
        <p class="card-text">{props.description}</p>
        <Link className="btn btn-primary">Play</Link>
      </div>
    </div>
  )
}

function GameMenu() {
  const gameList = [
    {
      name: "War",
      description: "A simple well-known game...",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
    {
      name: "CorsicanWar",
      description: "Be faster than your opponent and win all of his cards !",
      image: ""
    },
  ]
  return (
    <div className="text-center mt-3 gameMenu">
      <div className="jumbotron">
        <h1>Let's Play !</h1>
      </div>
      <div className="container card-list">
        <div className="d-flex justify-content-center row row-cols-md-3 g-3">
          {gameList.map((game) =>
            <GameMenuCard game={game.name} description={game.description} image={game.image} />
          )}
        </div>
      </div>
    </div>
  )
}

export default GameMenu
