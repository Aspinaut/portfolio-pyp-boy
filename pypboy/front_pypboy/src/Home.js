import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import VaultBoyWalkingPure from './assets/images/VaultBoyWalkingPure.gif'

function NavbarTop() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="#">RESUME</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">PLAY</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">BOARD</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">MAP</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">RADIO</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">EXPLORE</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

function Homer() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
                <a className="nav-link" href="index.html">STAT</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link" href="inv.html">INV</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link" href="#">DATA</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link" href="#">MAP</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link" href="#">RADIO</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href="#status" className="nav-link" data-toggle="tab" role="tab">STATUS</a>
              </li>
              <li className="nav-item">
                <a href="#special" className="nav-link" data-toggle="tab">SPECIAL</a>
              </li>
              <li className="nav-item">
                <a href="#perks" className="nav-link" data-toggle="tab">PERKS</a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active" id="status" role="tabpanel">
                <div className="center-image">
                </div>
                <div className="stat-bars">
                  <div className="row">
                    <div className="col-12">
                      <div className="stat-bar">
                        <div className="level-progress">
                          <div className="level-progress-indicator w-25">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="stat-bar">
                        <div className="level-progress">
                          <div className="level-progress-indicator w-50">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                    </div>
                    <div className="col-3">
                      <div className="stat-bar">
                        <div className="level-progress">
                          <div className="level-progress-indicator w30">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="stat-bar">
                        <div className="level-progress">
                          <div className="level-progress-indicator w60">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                    </div>
                    <div className="col-3">
                      <div className="stat-bar">
                        <div className="level-progress">
                          <div className="level-progress-indicator w80">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="stat-bar">
                        <div className="level-progress">
                          <div className="level-progress-indicator">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row stat-numbers">
                    <div className="spacer-numbers">
                    </div>
                    <div className="col-2">
                      <img src="333.png" className="img-responsive" />
                    </div>
                    <div className="col-1">
                      <div className="icon">
                        <img src="33.ico" className="sm-image img-responsive"/>
                      </div>
                      <div className="points">10
                      </div>
                    </div>
                    <div className="col-1 transparent">
                    </div>
                    <div className="col-2">
                      <img src="helmet.png" alt=""/>
                    </div>
                    <div className="col-1">
                      <div className="icon">
                        <img src="energy.png" className="en-image img-responsive"/>
                      </div>
                      <div className="points">10
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="icon">
                        <img src="radiation.png" className="rad-image img-responsive"/>
                      </div>
                      <div className="points">18
                      </div>
                    </div>
                    <div className="col-2 transparent">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <navbar className="navbar navbar-light pip-footer">
        <div className="row">
          <div className="col-3">
            HP 90/90
          </div>
          <div className="col-6">
           <span>LEVEL 1</span>
            <div className="level-progress">
              <div className="level-progress-indicator">
              </div>
            </div>
          </div>
          <div className="col-3 text-right">
            AP 50/50
          </div>
        </div>
      </navbar>
    </>
  )
}

function Home() {
  return (
    <>
      <div className="VaultBoy d-flex align-items-center justify-content-center">
        <img src={VaultBoyWalkingPure} alt="VaultBoy Walking..."/>
      </div>
    </>
  )
}

export default Home
