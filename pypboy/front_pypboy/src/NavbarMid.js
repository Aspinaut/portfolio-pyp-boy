function NavbarMid() {
  return (
    <div className="row">
      <div className="row">
        <div className="">
          <nav className="navbar">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a href="#nav-skills" className="nav-link nav-item" data-toggle="tab" role="tab" aria-selected="true">SKILLS</a>
              <a href="#nav-trainings" className="nav-link nav-item" data-toggle="tab" role="tab" aria-selected="false">TRAININGS</a>
              <a href="#nav-xp" className="nav-link nav-item" data-toggle="tab" role="tab" aria-selected="false" >EXP</a>
              <a href="#nav-languages" className="nav-link nav-item" data-toggle="tab" role="tab" aria-selected="false">LANGUAGES</a>
              <a href="#nav-passions" className="nav-link nav-item" data-toggle="tab" role="tab" aria-selected="false">PASSIONS</a>
              <a href="#nav-ikigai" className="nav-link nav-item" data-toggle="tab" role="tab" aria-selected="false">IKIGAI</a>
            </div>
          </nav>
        </div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade active show" id="nav-skills" role="tabpanel" aria-labelledby="nav-skills-tab" >
          <p>
            <i className="fab fa-linux"></i>
            <span className="underline"> OS :</span> Linux, Windows, MacOS</p>
          <p>
            <i className="fas fa-code"></i>
            <span className="underline"> Languages :</span> Python, C, Ruby, HTML/CSS/JS</p>
          <p>
            <i className="fas fa-database"></i>
             <span className="underline"> DB :</span> PostgreSQL, SQLite, MongoDB</p>
          <p>
            <i className="fas fa-puzzle-piece"></i>
            <span className="underline"> Frameworks / Libraries :</span> Django, React, Rails, Bootstrap</p>
          <p>
            <i className="fab fa-git-alt"></i>
            <span className="underline"> Softwares :</span> Git, VirtualBox, Jira, Filezilla, ParseHub, Office Package, Adobe Package (PS, Illustrator, InDesign)</p>
          <p className="last">
            <i className="fas fa-car"></i>
            <span></span> B License + vehicle</p>
          <hr className="mt-5 hr"/>
        </div>

        <div className="tab-pane fade" id="nav-trainings" role="tabpanel" aria-labelledby="nav-trainings-tab" >
          <p><span className="underline">july 2021 - :</span>    19network42 coding school, Brussels</p>
          <p><span className="underline">oct 2020 - august 2021:</span> full-stack training at Valarep, Valenciennes</p>
          <p><span className="underline">april - june 2020 :</span> online web dev training, The Hacking Project</p>
          <p><span className="underline">2017 - 2019 :</span> coding self-learning</p>
          <p><span className="underline">2014 - 2016 :</span> Graphic Arts, St Luc Tournai</p>
          <p className="last"><span className="underline">2013 :</span> Baccalauréat STD2A (Applied Arts), Louvroil</p>
          <hr className="mt-5 hr"/>
        </div>

        <div className="tab-pane fade" id="nav-xp" role="tabpanel" aria-labelledby="nav-xp-tab" >
          <p><span className="underline">june - august 2021 :</span> creation of a personal portfolio</p>
          <p><span className="underline">january - may 2021 :</span> Scrum Master / JS Developer internship for Culturius, Brussels</p>
          <p><span className="underline">september 2020 :</span> C piscine at 19 school, Brussels</p>
          <p><span className="underline">july 2020 :</span> website creation for Cuisines Citoyennes Collaboratives</p>
          <hr className="mt-5 hr"/>
        </div>

        <div className="tab-pane fade" id="nav-languages" role="tabpanel" aria-labelledby="nav-languages-tab" >
          <p><span className="underline">French</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>
          <p><span className="underline">English</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <p><span className="underline">German</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <p><span className="underline">Spanish</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <p><span className="underline">Italian</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <hr className="mt-5 hr"/>
        </div>

        <div className="tab-pane fade" id="nav-passions" role="tabpanel" aria-labelledby="nav-passions-tab" >
          <p>
            <i className="fas fa-dice"></i>
            <span></span> Games (video, cards, society, role)
          </p>
          <p>
            <i className="fas fa-book"></i>
            <span></span> Lecture (sci-fi, fantasy, personal development)
          </p>
          <p>
            <i className="fas fa-music"></i>
            <span></span> Piano
          </p>
          <p>
            <i className="fas fa-fist-raised"></i>
            <span></span> Karate
          </p>
          <hr className="mt-5 hr"/>
        </div>
      </div>
    </div>
  )
}

export default NavbarMid
