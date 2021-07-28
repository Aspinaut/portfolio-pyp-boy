import { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './accounts/login_new'

function NavbarTop() {
  const [token, setToken] = useState('')
  const [loginActive, setLoginActive] = useState('hidden')
  const [activeTab, setActiveTab] = useState(1)
  const switchActiveTab = (index) => {
    setActiveTab(index)
  }

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

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ">
            <li
              onClick={() => switchActiveTab(1)}
              className={activeTab === 1 ? "nav-item active" : "nav-item"}>
                <Link to="/" className="nav-link">RESUME</Link>
            </li>
            <li
              onClick={() => switchActiveTab(2)}
              className={activeTab === 2 ? "nav-item active" : "nav-item"}>
                <Link to="/play" className="nav-link">PLAY</Link>
            </li>
            <li
              onClick={() => switchActiveTab(3)}
              className={activeTab === 3 ? "nav-item active" : "nav-item"}>
                <Link to={"/board"} className="nav-link">BOARD</Link>
            </li>
            <li
              onClick={() => switchActiveTab(4)}
              className={activeTab === 4 ? "nav-item active" : "nav-item"}>
                <Link to={"/map"} className="nav-link">MAP</Link>
            </li>
            <li
              onClick={() => switchActiveTab(5)}
              className={activeTab === 5 ? "nav-item active" : "nav-item"}>
                <Link to={"/radio"} className="nav-link">RADIO</Link>
            </li>
            <li
              onClick={() => switchActiveTab(6)}
              className={activeTab === 6 ? "nav-item active" : "nav-item"}>
                <Link to={"/users"} className="nav-link">USERS</Link>
            </li>
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
