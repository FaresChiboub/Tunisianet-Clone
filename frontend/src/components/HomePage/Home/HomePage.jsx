import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

function HomePage({ isLoggedIn, profilePicture, setIsLoggedIn }) {
  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        profilePicture={profilePicture}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Hero />
      <Footer />
    </>
  );
}

export default HomePage;
