import { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './accounts/login_new'

const tabs = [
  {
    name: 'RESUME',
    endpoint: '/',
    id: 1,
  },
  {
    name: 'PLAY',
    endpoint: '/play',
    id: 2,
  },
  {
    name: 'BOARD',
    endpoint: '/board',
    id: 3,
  },
  {
    name: 'MAP',
    endpoint: '/map',
    id: 4,
  },
  {
    name: 'RADIO',
    endpoint: '/radio',
    id: 5,
  },
  {
    name: 'USERS',
    endpoint: '/users',
    id: 6,
  }
]

function NavbarTop() {
  const [token, setToken] = useState('')
  const [loginActive, setLoginActive] = useState('hidden')
  const [activeTab, setActiveTab] = useState(1)

  const userLogin = (tok) => {
    setToken(tok)
  }

  const drawLoginForm = () => {
    if (loginActive === "hidden") {
      setLoginActive('')
    } else {
      setLoginActive('hidden')
    }
  }
  // <li
  // onClick={() => setActiveTab(tab.id)}
  // className={activeTab === tab.id ? "nav-item active" : "nav-item"}>
  // <a href={tab.endpoint} className="nav-link">{tab.name}</a>
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav">
          { tabs.map(tab =>
            <li
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "nav-item active" : "nav-item"}>
            <Link to={tab.endpoint} className="nav-link">{tab.name}</Link>
            </li>
          ) }
          </ul>
        </div>
      </nav>
    </>
  )
}

// <div className="d-flex justify-content-end me-2">
// <div className="btn btn-success" onClick={drawLoginForm}>Log</div>
// </div>
// <Login userLogin={userLogin} hidden={loginActive}/>

export default NavbarTop
