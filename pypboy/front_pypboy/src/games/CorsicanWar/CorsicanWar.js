import React, { useState, useEffect, useRef, Suspense, Component } from 'react'
import useInterval from '../useInterval'
import Timer from '../Timer'
import { Deck, DeckBack } from '../Cards'
import deckAll from '../../assets/images/Deck.png'
import deckAll2 from '../../assets/images/snake.png'
import deckAll3 from '../../assets/images/VaultBoy.png'
import deckAll4 from '../../assets/images/VaultBoyPlayingCards.jpg'
import axios from 'axios'

const CANVAS_WIDTH = 1080
const CANVAS_HEIGHT = 600
const deckBack = new DeckBack()
const deck = new Deck()
deckBack.createDeck()
deck.createDeck()
const CARD_WIDTH = deckBack.deck[0].image.width
const CARD_HEIGHT = deckBack.deck[0].image.height

const posCardP2 = {
  x: (CANVAS_WIDTH / 2),
  y: (CANVAS_HEIGHT / 2) - (CARD_HEIGHT / 2)
}
const posCardP1 = {
  x: (CANVAS_WIDTH / 2) - (CARD_WIDTH ),
  y: (CANVAS_HEIGHT / 2) - (CARD_HEIGHT / 2)
}
const posDeckP2 = {
  x: (CANVAS_WIDTH / 2) + (CARD_WIDTH),
  y: (CANVAS_HEIGHT / 2) - (CARD_HEIGHT / 2)
}
const posDeckP1 = {
  x: (CANVAS_WIDTH / 2) - (CARD_WIDTH * 2),
  y: (CANVAS_HEIGHT / 2) - (CARD_HEIGHT / 2)
}

  // functional component to fetch users list

  // function PersonList() {
  //   const [person, setPerson] = useState([])
  //   axios.get(`http://localhost:8000/api/users`)
  //     .then(res => {
  //       setPerson(res.data);
  //     })
  //   return (
  //     <ul>
  //       { person.map(p => <li>{p.username}</li>) }
  //     </ul>
  //   )
  // }

  function fetchPersonList() {
    return (axios.get(`http://localhost:8000/api/users`)
            .then(res => res.data))
  }

  async function testFetch() {
    const users = await axios.get(`http://localhost:8000/api/users`)
            .then(res => res.data)
    return (
      <ul>
        { users.map(p => <li>{p.username}</li>) }
      </ul>
    )
  }

  const PersonList = ({ resource }) => {
    const personList = resource.personList.read()

    return (
      <ul>
        { personList.map(p => <li>{p.username}</li>) }
      </ul>
    )
  }

  const Person = ({ resource }) => {
    const person = resource.person.read();

    return <div>{person.name.first}</div>;
  };

  const Num = ({ resource }) => {
    const n = resource.num.read();
    return <div>your random number is: {n}</div>;
  };

  const fetchPerson = () => {
    return fetch("https://randomuser.me/api")
      .then(x => x.json())
      .then(x => x.results[0]);
  };

  const wrapPromise = promise => {
    let status = "pending";
    let result = "";
    let suspender = promise.then(
      r => {
        status = "success";
        result = r;
      },
      e => {
        status = "error";
        result = e;
      }
    );

    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        }

        return result;
      }
    };
  };

  const randomNumber = () => {
    return new Promise(res => setTimeout(() => res(Math.random()), 3000));
  };

  const createResource = () => {
    return {
      person: wrapPromise(fetchPerson()),
      num: wrapPromise(randomNumber()),
      personList: wrapPromise(fetchPersonList()),
      testFetch: wrapPromise(fetchPersonList()),
    };
  };

function War() {
  const canvasRef = useRef()


  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    context.drawImage(deckBack.deck[14].image, posDeckP1.x, posDeckP1.y)
    context.drawImage(deckBack.deck[9].image, posDeckP1.x + 100, posDeckP1.y + 100)
    context.drawImage(deckBack.deck[3].image, posDeckP1.x - 100, posDeckP1.y -100)
  }, [])

  // <img src={deckAll} alt="DECK"/>
  // <img src={deckAll2} alt="DECK"/>
  // <img src={deckAll3} alt="DECK"/>
  // <img src={deckAll4} alt="DECK"/>


  const resource = createResource();

  return (
    <>
      <Suspense fallback={<h1>loading num...</h1>}>
        <Num resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>loading person...</h1>}>
        <Person resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>loading person...</h1>}>
        <PersonList resource={resource}/>
      </Suspense>
      <canvas
      className="border"
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      ref={canvasRef} >
      Sorry, your browser does not support canvas HTML...
      </canvas>
    </>
  )
}

export default War
