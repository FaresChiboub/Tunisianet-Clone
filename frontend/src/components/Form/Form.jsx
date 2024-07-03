import React, { useState } from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import userPicture from "../../assets/Images/Navbar/user.png";
import profileLogoPic from "../../assets/Images/Login/Logo-Login.jpg";
import "./Form.css";

const Form = () => {
  const [toggleAccount, setToggleAccount] = useState(false);
  const [formData, setFormData] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });
  const [profilePicture, setProfilePicture] = useState(userPicture);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  function handleSubmit(e) {
    e.preventDefault();

    const url = toggleAccount
      ? "http://localhost:8001/api/signup"
      : "http://localhost:8001/api/login";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);

        if (toggleAccount) {
          setIsLoggedIn(false);
          localStorage.setItem("isLoggedIn", "false");
          setProfilePicture(userPicture); 
        } else {
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("profilePicture", data.profilePicture);
          setProfilePicture(data.profilePicture);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleToggleAccount() {
    setToggleAccount((prevAccount) => !prevAccount);
  }

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        profilePicture={profilePicture}
        setIsLoggedIn={setIsLoggedIn}
        userPicture={userPicture} 
        profileLogoPic={profileLogoPic} 
      />
      <div className="form--nav">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
        </ul>
      </div>
      <div className="form--title">
        <h2>
          {toggleAccount
            ? "Connectez-vous à votre compte"
            : "Créez votre compte"}
        </h2>
        <hr />
      </div>
      <form className="form--data" onSubmit={handleSubmit}>
        {toggleAccount && (
          <p>
            Vous avez déjà un compte ?
            <span onClick={handleToggleAccount} className="login">
              Connectez-vous
            </span>
          </p>
        )}
        {toggleAccount && (
          <div className="form--box">
            <label htmlFor="gender">Titre</label>
            <div className="radio-group">
              <input
                type="radio"
                value="M."
                name="gender"
                id="gender-m"
                onChange={handleChange}
              />
              <label htmlFor="gender-m">M.</label>
              <input
                type="radio"
                value="Mme."
                name="gender"
                id="gender-mme"
                onChange={handleChange}
              />
              <label htmlFor="gender-mme">Mme.</label>
            </div>
          </div>
        )}
        {toggleAccount && (
          <div className="form--box">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
            />
            <span className="star--label">*</span>
          </div>
        )}
        {toggleAccount && (
          <div className="form--box">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
            />
            <span className="star--label">*</span>
          </div>
        )}
        <div className="form--box">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
          <span className="star--label">*</span>
        </div>
        <div className="form--box">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <span className="star--label">*</span>
        </div>
        {!toggleAccount && (
          <span className="forget--password">Mot de passe oublié ?</span>
        )}
        {!toggleAccount && (
          <span onClick={handleToggleAccount} className="create--account--btn">
            Pas de compte ? Créez-en un
          </span>
        )}
        {toggleAccount && (
          <div className="form--box">
            <label htmlFor="dateOfBirth">Date de naissance</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              onChange={handleChange}
            />
            <span className="star--label">*</span>
          </div>
        )}
        <br />
        {toggleAccount && (
          <span className="date--example">(Ex. : 31/05/1970)</span>
        )}
        <button className="submit--btn" type="submit">
          {toggleAccount ? "Enregistrer" : "Connexion"}
        </button>
      </form>
    </>
  );
};

export default Form;
