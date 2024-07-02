import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About us/About";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/HomePage/Home/HomePage";
import OurStore from "./components/OurStore/OurStore";
import Delivery from "./components/Delivery/Delivery";
import Condition from "./components/Condition/Condition";
import SecurePayment from "./components/SecurePayment/SecurePayment";
import Form from "./components/Form/Form";
import userPicture from "./assets/Images/Navbar/user.png";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [profilePicture, setProfilePicture] = useState(
    localStorage.getItem("profilePicture") || null
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            isLoggedIn={isLoggedIn}
            profilePicture={userPicture || profilePicture} 
            setIsLoggedIn={setIsLoggedIn}
            userPicture={userPicture}
          />
        }
      />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/our-stores" element={<OurStore />} />
      <Route path="/Delivery" element={<Delivery />} />
      <Route path="/terms-of-use" element={<Condition />} />
      <Route path="/secure-payment" element={<SecurePayment />} />
      <Route path="/personal-info" element={<Form />} />
    </Routes>
  );
}

export default App;
