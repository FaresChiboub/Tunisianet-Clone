import { useState } from "react";
import cogWheel from "../../../assets/Images//Navbar/cog-wheel.png";
import profilePicture from "../../../assets/Images/Navbar/user.png";
import shoppingBag from "../../../assets/Images/Navbar/shopping-bag.png";
import logo from "../../../assets/Images/Navbar/tunisianet-logo.png";
import search from "../../../assets/Images/Navbar/search.png";
import heartIcon from "../../../assets/Images/Navbar/heart.png";
import balanceIcon from "../../../assets/Images/Navbar/balance.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [wheelSettings, setWheelSettings] = useState(false);
  const [profileSettings, setProfileSettings] = useState(false);

const navigate=useNavigate()

  function handleWheelToggle() {
    setWheelSettings((prevSetting) => !prevSetting);
    setProfileSettings(false);
  }
  function handleProfileToggle() {
    setProfileSettings((prevSetting) => !prevSetting);
    setWheelSettings(false);
  }
function returnHome(){
    navigate("/")
}
  return (
    <>
      <nav>
        <div className="firstNav">
          <div className="left--nav">
            <img src={logo} className="logo--icon" alt="Logo" onClick={returnHome}/>
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
              onClick={handleWheelToggle}
              alt="Cog Wheel"
            />
            <ul className={`wheel--settings ${wheelSettings ? "active" : ""}`}>
              <li>
                <img src={heartIcon} className="heart--icon" alt="Heart Icon" />
                Mes Favories
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
              onClick={handleProfileToggle}
              alt="profile icon"
            />
            <ul
              className={`profile--settings ${profileSettings ? "active" : ""}`}
            >
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
              <li>Climatisation</li>
              <li>Informatique</li>
              <li>Téléphonie & Tablette</li>
              <li>Stockage</li>
              <li>Impression</li>
              <li>TV-Son-Photos</li>
              <li>Electroménager</li>
              <li>Bureautique</li>
              <li>Réseau & Connectiques</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
