import Navbar from "../../components/HomePage/Navbar/Navbar";
import Footer from "../../components/HomePage/Footer/Footer";
import gridIcon2 from "../../assets/Images/Grid--Images/catalog.png";
import gridIcon from "../../assets/Images/Grid--Images/grid2.png";

import "./Climatisation.css";
import { useState } from "react";
function Climatisation({
  isLoggedIn,
  profilePicture,
  setIsLoggedIn,
  handleLogout,
}) {
  const [sliderValue, setSliderValue] = useState(50);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [defaultOption, setDefaultOption] = useState("Prix croissants");
  function sliderHandleChange(e) {
    setSliderValue(e.target.value);
  }

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        profilePicture={profilePicture}
        setIsLoggedIn={setIsLoggedIn}
        handleLogout={handleLogout}
      />
      <nav className="climatisation--navbar">
        <ul>
          <li>Accueil</li>
          <li>|</li>
          <li>Electroménager</li>
          <li>|</li>
          <li>Climatisation</li>
        </ul>
      </nav>
      <div className="climatisation--main">
        <section className="climatisation-sidebar">
          <h3>Filtrer</h3>
          <p>Prix</p>
          <div className="slider-container">
            <span className="slider-label">0</span>
            <input
              type="range"
              min="0"
              max="10000"
              value={sliderValue}
              className="climatisation--slider"
              id="climatisation--slider"
              onChange={sliderHandleChange}
            />
            <span className="slider-label">{sliderValue}</span>
          </div>
          <hr />
          <p>Fabricants</p>
          <div className="Climatisation--brand">
            <div className="Climatisation--order">
              <input type="checkbox" id="BioLux" name="BioLux" />
              <label htmlFor="BioLux">BioLux</label>
            </div>
            <div className="Climatisation--order">
              <input type="checkbox" id="BOSCH" name="BOSCH" />
              <label htmlFor="BOSCH">BOSCH</label>
            </div>
            <div className="Climatisation--order">
              <input type="checkbox" id="COALA" name="COALA" />
              <label htmlFor="COALA">COALA</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="CONDOR" name="CONDOR" />
              <label htmlFor="CONDOR">CONDOR</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="Fresh" name="Fresh" />
              <label htmlFor="Fresh">Fresh</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="GREE" name="GREE" />
              <label htmlFor="GREE">GREE</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="Hisense" name="Hisense" />
              <label htmlFor="Hisense">Hisense</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="Hyundai" name="Hyundai" />
              <label htmlFor="Hyundai">Hyundai</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="Iris" name="Iris" />
              <label htmlFor="Iris">Iris</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="LG" name="LG" />
              <label htmlFor="LG">LG</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="Midea" name="Midea" />
              <label htmlFor="Midea">Midea</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="SABA" name="SABA" />
              <label htmlFor="SABA">SABA</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="Samsung" name="Samsung" />
              <label htmlFor="Samsung">Samsung</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="Sharp" name="Sharp" />
              <label htmlFor="Sharp">Sharp</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="TCL" name="TCL" />
              <label htmlFor="TCL">TCL</label>
            </div>
            <hr />
            <p>Puissance</p>

            <div className="Climatisation--order">
              <input type="checkbox" id="power1" name="power1" />
              <label htmlFor="power1">12000 BTU</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="power2" name="power2" />
              <label htmlFor="power2">18000 BTU</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="power3" name="power3" />
              <label htmlFor="power3">24000 BTU</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="power4" name="power4" />
              <label htmlFor="power4">36000 BTU</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="power5" name="power5" />
              <label htmlFor="power5">48000 BTU</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="power6" name="power6" />
              <label htmlFor="power6">60000 BTU</label>
            </div>

            <div className="Climatisation--order">
              <input type="checkbox" id="power7" name="power7" />
              <label htmlFor="power7">90000 BTU</label>
            </div>
            <hr />
            <p>Type</p>
            <div className="Climatisation--order">
              <input type="checkbox" id="ChaudFroid" name="ChaudFroid" />
              <label htmlFor="ChaudFroid">Chaud froid</label>
            </div>
            <div className="Climatisation--order">
              <input type="checkbox" id="Froid" name="Froid" />
              <label htmlFor="Froid">Froid</label>
            </div>
            <hr />
            <div className="Climatisation--order">
              <input type="checkbox" id="Froid" name="Froid" />
              <label htmlFor="Froid">Froid</label>
            </div>
            <p>Garantie</p>
            <div className="Climatisation--order">
              <input type="checkbox" id="year1" name="year1" />
              <label htmlFor="year1">3 ans</label>
            </div>
            <div className="Climatisation--order">
              <input type="checkbox" id="year2" name="year2" />
              <label htmlFor="year2">5 ans</label>
            </div>
            <p>Inverter</p>
            <div className="Climatisation--order">
              <input type="checkbox" id="non" name="non" />
              <label htmlFor="non">Non</label>
            </div>
            <div className="Climatisation--order">
              <input type="checkbox" id="oui" name="oui" />
              <label htmlFor="oui">Oui</label>
            </div>
            <hr />
          </div>
        </section>
        <div className="climatisation--bar">
          <div className="left--bar">
            <img src={gridIcon}></img>
            <img src={gridIcon2}></img>
          </div>
          <div className="middle--bar">
            <p>Il y a {itemQuantity} produits.</p>
          </div>
          <div className="right--bar">
            <p>Trier par :</p>
            <select defaultValue={defaultOption}>
              <option>Pertinence</option>
              <option>Nouveaux produits en premier</option>
              <option>Nom, A a Z</option>
              <option>Nom, Z a A</option>
              <option>Prix croissants</option>
              <option>Prix décroissants</option>
              <option>En Stock</option>
              <option>Aléatoire</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Climatisation;
