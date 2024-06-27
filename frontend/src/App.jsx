import About from "./components/About us/About";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/HomePage/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurStore from "./components/OurStore/OurStore";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="contact-us" element={<Contact />}></Route>
          <Route path="our-stores" element={<OurStore />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
