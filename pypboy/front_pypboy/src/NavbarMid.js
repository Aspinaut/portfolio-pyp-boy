function NavbarMid() {
  return (
    <>
      <div classNameName="row">
        <div classNameName="col-12">
          <ul classNameName="nav nav-tabs">
            <li classNameName="nav-item">
              <a href="#nav-skills" classNameName="nav-link" data-toggle="tab" role="tab">SKILLS</a>
            </li>
            <li classNameName="nav-item">
              <a href="#nav-trainings" classNameName="nav-link" data-toggle="tab">TRAININGS</a>
            </li>
            <li classNameName="nav-item">
              <a href="#nav-xp" classNameName="nav-link" data-toggle="tab">EXP</a>
            </li>
            <li classNameName="nav-item">
              <a href="#nav-languages" classNameName="nav-link" data-toggle="tab">LANGUAGES</a>
            </li>
            <li classNameName="nav-item">
              <a href="#nav-passions" classNameName="nav-link" data-toggle="tab">PASSIONS</a>
            </li>
            <li classNameName="nav-item">
              <a href="#ikigai" classNameName="nav-link" data-toggle="tab">IKIGAI</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade active show" id="nav-skills" role="tabpanel" aria-labelledby="nav-skills-tab" >
          <p>
            <i className="fab fa-linux"></i>
            <span className="underline">OS :</span> Linux (Fedora, Debian), Windows, MacOS</p>
          <p>
            <i className="fas fa-code"></i>
            <span className="underline">Langages :</span> C, Bash, Ruby, HTML/CSS/JS, Lua, PHP</p>
          <p>
            <i className="fas fa-database"></i>
             <span className="underline">BDD :</span> PostgreSQL, MariaDB</p>
          <p>
            <i className="fas fa-puzzle-piece"></i>
            <span className="underline">Frameworks :</span> Rails, Bootstrap, LOVE2D</p>
          <p>
            <i className="fab fa-wordpress"></i>
             <span className="underline">CMS :</span> Wordpress, Joomla</p>
          <p>
            <i className="fas fa-atom"></i>
            <span className="underline">IDE :</span> Vim, Atom, VsCode</p>
          <p>
            <i className="fab fa-git-alt"></i>
            <span className="underline">Logiciels :</span> Git, VirtualBox, Filezilla, Suite Office, Suite Adobe (PS, Illustrator, InDesign)</p>
          <p className="last">
            <i className="fas fa-car"></i>
            Permis B + véhicule</p>
          <hr className="mt-5 hr"/>
        </div>

        <div className="tab-pane fade active show" id="nav-trainings" role="tabpanel" aria-labelledby="nav-trainings-tab" >
          <p><span className="underline">nov 2020 - :</span>    19network42 coding school, Bruxelles</p>
          <p><span className="underline">oct 2020 - aout 2021:</span> Formation full-stack Valarep, Valenciennes</p>
          <p><span className="underline">avril - juin 2020 :</span> Formation découverte web dev, The Hacking Project</p>
          <p><span className="underline">2017 - 2019 :</span> Etude autodidacte programmation informatique</p>
          <p><span className="underline">2014 - 2016 :</span> Arts Graphiques, St Luc Tournai</p>
          <p className="last"><span className="underline">2013 :</span> Baccalauréat STD2A (Arts Appliqués), Louvroil</p>
          <hr className="mt-5 hr"/>
        </div>

        <div className="tab-pane fade active show" id="nav-xp" role="tabpanel" aria-labelledby="nav-xp-tab" >
          <p><span className="underline">septembre 2020 :</span> piscine C à l'école 19, Bruxelles</p>
          <p><span className="underline">juillet 2020 :</span> Projet de site web pour l'association Cuisines Citoyennes Collaboratives</p>
          <p><span className="underline">janvier - mars 2020 :</span> Ouvrier serriste à Tom d'Aqui, Landes, France</p>
          <p><span className="underline">2016/2018/2019 :</span> Saisons de vendanges comme ouvrier agricole, Jura et Bourgogne, France</p>
          <p><span className="underline">mars 2018 :</span> Préparation de l'exposition Oscurana au château de la Borie, Limousin, France</p>
          <p className="last"><span className="underline">août 2016 :</span> Chantier participatif d'archéologie et de restauration de bâtiments anciens, Siedlecin, Pologne</p>
          <hr className="mt-5 hr"/>
        </div>

        <div className="tab-pane fade active show" id="nav-languages" role="tabpanel" aria-labelledby="nav-languages-tab" >
          <p><span className="underline">Français</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>
          <p><span className="underline">Anglais</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <p><span className="underline">Allemand</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <p><span className="underline">Espagnol</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <p><span className="underline">Italien</span> :
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <p className="last"><span className="underline">Hindi</span> :
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </p>
          <hr className="mt-5 hr"/>

        </div>

        <div className="tab-pane fade active show" id="nav-passions" role="tabpanel" aria-labelledby="nav-passions-tab">
          <p>
            <i className="fas fa-dice"></i>
            Jeux (vidéos, de cartes, de société, de rôles)
          </p>
          <p>
            <i className="fas fa-book"></i>
            Lecture (S-F, fantasy, développement personnel)
          </p>
          <p>
            <i className="fas fa-music"></i>
            Piano
          </p>
          <p>
            <i className="fas fa-fist-raised"></i>
            Karaté
          </p>
        </div>
      </div>
    </>
  )
}

export default NavbarMid
