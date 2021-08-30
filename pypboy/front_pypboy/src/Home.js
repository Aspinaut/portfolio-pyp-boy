import VaultBoyWalkingPure from './assets/images/VaultBoyWalkingPure.gif'
import NavbarMid from './NavbarMid'

function Home() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <NavbarMid />
      </div>
      <div className="VaultBoy d-flex align-items-center justify-content-center">
        <img src={VaultBoyWalkingPure} alt="VaultBoy Walking..."/>
      </div>
    </>
  )
}

export default Home
