import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images"
import './Navbar.css';

const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen] = useState(false);


  return (
  <nav className="app__navbar">
    <div className="app__navbar_logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar_links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">about</a></li>
      <li className="p__opensans"><a href="#menu">menu</a></li>
      <li className="p__opensans"><a href="#awards">awards</a></li>
      <li className="p__opensans"><a href="#contact">contact</a></li>
    </ul>
    <div className="app__navbar_login">
      <a href="#login" className="p__opensans">Log In/Register</a>
      <div />
      <a href="/" className="p__opensans">Book Table</a>
    </div>
    <div className="app__navbar_smallScreen">
      {!isMenuOpen && (
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setIsMenuOpen(true)} />
      )}
        {isMenuOpen && (
        <div className="app__navbar_smallScreen_overlay flex__center slide_bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setIsMenuOpen(false)} />
          <ul className="app__navbar_smallScreen_links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">about</a></li>
            <li className="p__opensans"><a href="#menu">menu</a></li>
            <li className="p__opensans"><a href="#awards">awards</a></li>
            <li className="p__opensans"><a href="#contact">contact</a></li>
          </ul>
        </div>
        )}
    </div>
  </nav>
);
}
export default Navbar;
