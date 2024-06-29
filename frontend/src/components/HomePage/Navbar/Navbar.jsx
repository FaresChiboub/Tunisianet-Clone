import { useState } from "react";
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

const initialState = {
  Informatique: false,
  Téléphonie: false,
  Stockage: false,
  Impression: false,
  TVSonPhotos: false,
  Electromenager: false,
  Bureautique: false,
  Reseaux: false,
  Securite: false,
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(initialState);

  const handleMouseOver = (menu) => {
    setShowMenu((prevState) => ({
      ...initialState,
      [menu]: true,
    }));
  };

  const handleMouseLeave = () => {
    setShowMenu(initialState);
  };

  return (
    <nav>
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
          <img
            src={shoppingBag}
            className="shopping--bag"
            alt="Shopping Bag"
          />
          <span className="bag--price">0.000 DT</span>
        </div>
      </div>
      <div className="secondNav">
        <div className="secondNav--list">
          <ul>
            <li className="climatisation--btn">Climatisation</li>
            <li
              className="informatique"
              onMouseOver={() => handleMouseOver("Informatique")}
            >
              Informatique
            </li>
            <li onMouseOver={() => handleMouseOver("Téléphonie")}>
              Téléphonie & Tablette
            </li>
            <li onMouseOver={() => handleMouseOver("Stockage")}>Stockage</li>
            <li onMouseOver={() => handleMouseOver("Impression")}>
              Impression
            </li>
            <li onMouseOver={() => handleMouseOver("TVSonPhotos")}>
              TV-Son-Photos
            </li>
            <li onMouseOver={() => handleMouseOver("Electromenager")}>
              Electroménager
            </li>
            <li onMouseOver={() => handleMouseOver("Bureautique")}>
              Bureautique
            </li>
            <li onMouseOver={() => handleMouseOver("Reseaux")}>
              Réseau & Connectiques
            </li>
          </ul>
        </div>
      </div>
      <ComponentList show={showMenu.Informatique} onMouseLeave={handleMouseLeave} />
      <BureautiqueList
        show={showMenu.Bureautique}
        onMouseLeave={handleMouseLeave}
      />
      <ElectromenagerList
        show={showMenu.Electromenager}
        onMouseLeave={handleMouseLeave}
      />
      <ImpressionList show={showMenu.Impression} onMouseLeave={handleMouseLeave} />
      <StockageList show={showMenu.Stockage} onMouseLeave={handleMouseLeave} />
      <ReseauxList show={showMenu.Reseaux} onMouseLeave={handleMouseLeave} />
      <SecuriteList show={showMenu.Securite} onMouseLeave={handleMouseLeave} />
      <TelephonieList show={showMenu.Téléphonie} onMouseLeave={handleMouseLeave} />
      <TvSonPhotosList
        show={showMenu.TVSonPhotos}
        onMouseLeave={handleMouseLeave}
      />
    </nav>
  );
};

export default Navbar;
