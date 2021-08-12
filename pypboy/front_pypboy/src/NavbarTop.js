import { useState} from 'react'
import { Link } from 'react-router-dom'
import Login from './accounts/login'
import Logout from './accounts/logout'
import Register from './accounts/register'

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
  const [registerActive, setRegisterActive] = useState('hidden')
  const [activeTab, setActiveTab] = useState(1)
  
  const userLogin = (tok) => {
    setToken(tok)
  }

  const drawLoginForm = () => {
    if (loginActive === "hidden") {
      if (registerActive === '')
        setRegisterActive('hidden')
      setLoginActive('')
    } else {
      setLoginActive('hidden')
    }
  }

  const drawRegisterForm = () => {
    if (registerActive === "hidden") {
      if (loginActive === '')
        setLoginActive('hidden')
      setRegisterActive('')
    } else {
      setRegisterActive('hidden')
    }
  }

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
          <li>
            <div className="d-flex justify-content-end">
              { token || sessionStorage.userToken ?
                  <Logout setToken={userLogin} />
                :
                  <div className="d-flex">
                    <button className="login-button mx-2" onClick={drawLoginForm}>Login</button>
                    <button className="register-button" onClick={drawRegisterForm}>Register</button>
                  </div>
              }
            </div>
          </li>
          </ul>
        </div>
      </nav>
      <Login userLogin={userLogin} visibility={loginActive} setVisibility={setLoginActive}/>
      <Register userLogin={userLogin} visibility={registerActive} setVisibility={setRegisterActive}/>
    </>
  )
}

export default NavbarTop
