import { useState } from "react";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import "./Form.css";

function Form() {
  const [toggleAccount, setToggleAccount] = useState(false);
  const [formData, setFormData] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
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
      <Navbar />
      <div className="form--nav">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
        </ul>
      </div>
      <div className="form--title">
        <h2>Connectez-vous à votre compte</h2>
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
      <Footer />
    </>
  );
}

export default Form;
