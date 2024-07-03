import Navbar from "../../components/HomePage/Navbar/Navbar";
import Footer from "../../components/HomePage/Footer/Footer";
import "./Climatisation.css";
import { useState } from "react";
function Climatisation() {
  const [sliderValue, setSliderValue] = useState(50);
  function sliderHandleChange(e) {
    setSliderValue(e.target.value);
  }
  return (
    <div>
      <Navbar />
      <nav className="climatisation--navbar">
        <ul>
          <li>Accueil</li>
          <li>|</li>
          <li>Electroménager</li>
          <li>|</li>
          <li>Climatisation</li>
        </ul>
      </nav>
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
</div>

      </section>
      <Footer />
    </div>
  );
}

export default Climatisation;
