import { useState } from "react";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
  }

  // Function to handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
        <p>Vous avez déjà un compte ? Connectez-vous !</p>
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
        <div className="form--box">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form--box">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form--box">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="form--box">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="form--box">
          <label htmlFor="dateOfBirth">Date de naissance</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={handleChange}
          />
        </div>
        <br />
        <span className="date--example">(Ex. : 31/05/1970)</span>
        <button className="submit--btn" type="submit">
          Enregistrer
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Form;
