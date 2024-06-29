import { useState } from "react";
import { debounce } from "lodash";
import cogWheel from "../../../assets/Images/Navbar/cog-wheel.png";
import profilePicture from "../../../assets/Images/Navbar/user.png";
import shoppingBag from "../../../assets/Images/Navbar/shopping-bag.png";
import logo from "../../../assets/Images/Navbar/tunisianet-logo.png";
import search from "../../../assets/Images/Navbar/search.png";
import heartIcon from "../../../assets/Images/Navbar/heart.png";
import balanceIcon from "../../../assets/Images/Navbar/balance.png";
import "./Navbar.css";
import ComponentList from "./data/Informatique";
import BureautiqueList from "./data/Bureautique";
import ElectromenagerList from "./data/Electroménager";
import ImpressionList from "./data/Impression";
import StockageList from "./data/Stockage";
import ReseauxList from "./data/Reseaux";
import SecuriteList from "./data/Securité";
import TelephonieList from "./data/Telephonie";
import TvSonPhotosList from "./data/Tv-Son-Photos";

// Function to return initial state
const getInitialState = () => ({
  Informatique: false,
  Téléphonie: false,
  Stockage: false,
  Impression: false,
  TVSonPhotos: false,
  Electromenager: false,
  Bureautique: false,
  Reseaux: false,
  Securite: false,
});

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(getInitialState());

  // Debounce function to delay state updates
  const debouncedSetShowMenu = debounce(setShowMenu, 300);

  const handleMouseEnter = (x) => {
    debouncedSetShowMenu((prevState) => ({
      ...getInitialState(),
      [x]: true,
    }));
  };

  const handleMouseLeave = () => {
    debouncedSetShowMenu(getInitialState());
  };

  return (
    <nav onMouseLeave={handleMouseLeave}>
      <div className="firstNav">
        <div className="left--nav">
          <img src={logo} className="logo--icon" alt="Logo" />
        </div>
        <div className="middle--nav">
          <input type="text" placeholder="Rechercher..." />
          <button className="search--btn">
            <img src={search} className="search--icon" alt="Search Icon" />
          </button>
        </div>
        <div className="right--nav">
          <img src={cogWheel} className="cog--wheel" alt="Cog Wheel" />
          <ul className="wheel--settings">
            <li>
              <img src={heartIcon} className="heart--icon" alt="Heart Icon" />
              Mes Favoris
            </li>
            <li>
              <img
                src={balanceIcon}
                className="balance--icon"
                alt="Balance Icon"
              />
              Comparer
            </li>
          </ul>
          <img
            src={profilePicture}
            className="profile--picture"
            alt="profile icon"
          />
          <ul className="profile--settings">
            <li>Connexion</li>
          </ul>
          <img src={shoppingBag} className="shopping--bag" alt="Shopping Bag" />
          <span className="bag--price">0.000 DT</span>
        </div>
      </div>
      <div className="secondNav">
        <div className="secondNav--list">
          <ul>
            <li className="climatisation--btn">Climatisation</li>
            <li
              className="informatique"
              onMouseEnter={() => handleMouseEnter("Informatique")}
            >
              Informatique
            </li>
            <li onMouseEnter={() => handleMouseEnter("Téléphonie")}>
              Téléphonie & Tablette
            </li>
            <li onMouseEnter={() => handleMouseEnter("Stockage")}>Stockage</li>
            <li onMouseEnter={() => handleMouseEnter("Impression")}>
              Impression
            </li>
            <li onMouseEnter={() => handleMouseEnter("TVSonPhotos")}>
              TV-Son-Photos
            </li>
            <li onMouseEnter={() => handleMouseEnter("Electromenager")}>
              Electroménager
            </li>
            <li onMouseEnter={() => handleMouseEnter("Bureautique")}>
              Bureautique
            </li>
            <li onMouseEnter={() => handleMouseEnter("Reseaux")}>
              Réseau & Connectiques
            </li>
          </ul>
        </div>
      </div>
      <ComponentList show={showMenu.Informatique} />
      <BureautiqueList show={showMenu.Bureautique} />
      <ElectromenagerList show={showMenu.Electromenager} />
      <ImpressionList show={showMenu.Impression} />
      <StockageList show={showMenu.Stockage} />

      <ReseauxList show={showMenu.Reseaux} />

      <SecuriteList show={showMenu.Securite} />

      <TelephonieList show={showMenu.Téléphonie} />
      <TvSonPhotosList show={showMenu.TVSonPhotos} />
    </nav>
  );
};

export default Navbar;
