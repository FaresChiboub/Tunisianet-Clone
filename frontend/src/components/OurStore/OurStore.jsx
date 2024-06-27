import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import logo from "../../assets/Images/Navbar/2-stores.png";
import "./OurStore.css";
function OurStore() {
  return (
    <>
      <div>
        <Navbar />
        <div className="ourStore--nav">
          <ul>
            <li>Accueil</li>
          </ul>
        </div>
        <div className="ourStore--title">
          <h2>Nos magasins </h2>
          <br />
          <hr className="ourStore--title--hr"></hr>
        </div>
        <div className="ourStore--box">
          <img src={logo} />
          <ul>
            <h2>Tunisianet</h2>
            <br />
            <li>10 Rue Saint Augustin</li>
            <li>1002 Tunis</li>
            <li>Tunisia</li>
            <br />
            <li>{`À propos et Contact ">`}</li>
          </ul>
          <ul>
            <li>Lun. 08:00-19:00</li>
            <li>Mar. 08:00-19:00</li>
            <li>Mer. 08:00-19:00</li>
            <li>Jeu. 08:00-19:00</li>
            <li>Ven. 08:00-19:00</li>
            <li>Sam. 08:00-19:00</li>
            <li>Dim. 08:00-19:00</li>
          </ul>
        </div>

        <div className="ourStore--box">
          <img src={logo} />
          <ul>
            <h2>Magasin Sousse</h2>
            <br />
            <li>Avenue Léopold Senghor, Diagonale Seltène</li>
            <li>4000 Sousse</li>
            <li>Tunisia</li>
            <br />
            <li>{`À propos et Contact ">`}</li>
          </ul>
          <ul>
            <li>Lun. 08:00-19:00</li>
            <li>Mar. 08:00-19:00</li>
            <li>Mer. 08:00-19:00</li>
            <li>Jeu. 08:00-19:00</li>
            <li>Ven. 08:00-19:00</li>
            <li>Sam. 08:00-19:00</li>
            <li>Dim. Fermé</li>
          </ul>
        </div>

        <div className="ourStore--box">
          <img src={logo} />
          <ul>
            <h2>Drive-in Charguia</h2>
            <br />
            <li>8 Rue 8601 La Charguia</li>
            <li>2035 Tunis</li>
            <li>Tunisia</li>
            <br />
            <li>{`À propos et Contact ">`}</li>
          </ul>
          <ul>
            <li>Lun. 08:00-19:00</li>
            <li>Mar. 08:00-19:00</li>
            <li>Mer. 08:00-19:00</li>
            <li>Jeu. 08:00-19:00</li>
            <li>Ven. 08:00-19:00</li>
            <li>Sam. 08:00-19:00</li>
            <li>Dim. Fermé</li>
          </ul>
        </div>

        <div className="ourStore--box">
          <img src={logo} />
          <ul>
            <h2>SAV Charguia</h2>
            <br />
            <li>8 Rue 8601 La Charguia</li>
            <li>2035 Tunis</li>
            <li>Tunisia</li>
            <br />
            <li>{`À propos et Contact ">`}</li>
          </ul>
          <ul>
            <li>Lun. 08:00-19:00</li>
            <li>Mar. 08:00-19:00</li>
            <li>Mer. 08:00-19:00</li>
            <li>Jeu. 08:00-19:00</li>
            <li>Ven. 08:00-19:00</li>
            <li>Sam. 08:00-19:00</li>
            <li>Dim. Fermé</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OurStore;
