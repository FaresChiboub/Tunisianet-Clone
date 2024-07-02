import React from "react";
import { useState } from "react";
import debounce from "lodash/debounce";
import profileDefaultPicture from "../../../assets/Images/Login/Logo-Login.jpg";
import "./Navbar.css";
import {
  cogWheel,
  shoppingBag,
  logo,
  search,
  heartIcon,
  balanceIcon,
  ComponentList,
  BureautiqueList,
  ElectromenagerList,
  ImpressionList,
  StockageList,
  ReseauxList,
  SecuriteList,
  TelephonieList,
  TvSonPhotosList,
} from "./importNav";

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

const Navbar = ({ isLoggedIn, profilePicture, setIsLoggedIn }) => {
  const [showMenu, setShowMenu] = useState(getInitialState());
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  const debouncedSetShowMenu = debounce((x) => {
    setShowMenu((prevState) => ({
      ...getInitialState(),
      [x]: true,
    }));
  }, 300);

  const handleMouseEnter = (x) => {
    debouncedSetShowMenu(x);
  };

  const handleMouseLeave = () => {
    debouncedSetShowMenu.cancel();
    setShowMenu(getInitialState());
  };

  const toggleWheelSettings = () => {
    setShowProfileSettings(false);
    setShowMenu((prevState) => ({
      ...getInitialState(),
      wheelSettings: !prevState.wheelSettings,
    }));
  };

  const toggleProfileSettings = () => {
    setShowMenu(getInitialState());
    setShowProfileSettings((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload();
  };

  return (
    <nav onMouseLeave={handleMouseLeave}>
      <div className="firstNav">
        <div className="left--nav">
          <a href="/">
            <img src={logo} className="logo--icon" alt="Logo" />
          </a>
        </div>
        <div className="middle--nav">
          <input type="text" placeholder="Rechercher..." />
          <button className="search--btn">
            <img src={search} className="search--icon" alt="Search Icon" />
          </button>
        </div>
        <div className="right--nav">
          <img
            src={cogWheel}
            className="cog--wheel"
            alt="Cog Wheel"
            onClick={toggleWheelSettings}
          />
          <ul
            className={`wheel--settings ${
              showMenu.wheelSettings ? "active" : ""
            }`}
          >
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
          <a
            href="#"
            className="profile--picture"
            onClick={toggleProfileSettings}
          >
            <img
              src={isLoggedIn ? profileDefaultPicture : profilePicture}
              className="profile--picture"
              alt="Profile Picture"
              style={{ filter: isLoggedIn ? "none" : "grayscale(100%)" }}
            />
          </a>
          <ul
            className={`profile--settings ${
              showProfileSettings ? "active" : ""
            }`}
          >
            <li
              onClick={
                isLoggedIn
                  ? handleLogout
                  : () => (window.location.href = "/personal-info")
              }
            >
              {isLoggedIn ? "Deconnexion" : "Connexion"}
            </li>
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
