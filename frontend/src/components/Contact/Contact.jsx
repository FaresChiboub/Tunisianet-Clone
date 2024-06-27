import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import "./Contact.css";
import { useState } from "react";
import location from "../../assets/Images/Icons/location--black.png"
import email from "../../assets/Images/Icons/email--black.png"
import fax from "../../assets/Images/Icons/printer--black.png"
import phone from "../../assets/Images/Icons/phone-call--black.png"

function Contact() {
  const [formValues, setFormValues] = useState({
    sujet: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted with values:", formValues);
    setFormValues({
      sujet: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <div className="contact--navbar">
        <ul>
          <li>Accueil</li>
          <li>|</li>
          <li>Contactez-nous</li>
        </ul>
      </div>

      <div className="contact--page">
        <div className="contact--sidebar">
          <ul className="contact--information">
            <h2>INFORMATIONS</h2>
            <li><img src={location}></img>Tunisianet</li>
            <li>10 Rue Saint Augustin</li>
            <li>1002 Tunis</li>
            <li>Tunisia</li>
          </ul>
          <ul className="contact--information">
            <li><img src={phone}></img>Appelez-nous :</li>
            <li>+216 31 31 00 00</li>
          </ul>
          <ul className="contact--information">
            <li><img src={fax}></img>Fax :</li>
            <li>+216 32 40 66 06</li>
          </ul>
          <ul className="contact--information">
            <li><img src={email}></img>Envoyez-nous un e-mail :</li>
            <li>contact@tunisianet.com.tn</li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="b3d0a850-e13e-4d88-b184-bc58621db329"
          />
          <h2>Contactez-nous</h2>

          <div className="input--box">
            <label htmlFor="sujet">Sujet</label>
            <input
              type="text"
              id="sujet"
              name="sujet"
              value={formValues.sujet}
              onChange={handleChange}
              placeholder="Service client"
            />
          </div>
          <div className="input--box">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="votre@email.com"
            />
          </div>
          <div className="input--box">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Comment pouvons-nous aider ?"
            ></textarea>
          </div>
          <button className="submit--button" type="submit">
            Envoyez
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
