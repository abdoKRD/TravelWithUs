import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import About from './About/About';
import News from './News/News';

const Navbar = ({ scrollToMain, scrollToHome }) => {
  const [active, setActive] = useState(false);
  const { isLoggedIn } = useAuth();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const closeAbout = () => {
    setIsAboutOpen(false);
  };

  const toggleNews = () => {
    setIsNewsOpen(!isNewsOpen);
  };

  const closeNews = () => {
    setIsNewsOpen(false);
  };

  const toggleNav = () => {
    setActive(!active);
  };

  const toggleContactDropdown = () => {
    setShowContactDropdown(!showContactDropdown);
  };

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon" /> TravelWithUs</h1>
          </Link>
        </div>
        <div className={`navBar ${active ? 'activeNavbar' : ''}`}>
          <ul className="navLists flex">
            <li className="navItem">
              <button className="navLink" onClick={scrollToHome}>Home</button>
            </li>
            <li className="navItem">
              <button className="navLink" onClick={scrollToMain}>Blogs</button>
            </li>
            <li className="navItem">
              <button className="navLink" onClick={toggleNews}>News</button>
            </li>
            <li className="navItem">
              <button className="navLink" onClick={toggleAbout}>About</button>
            </li>
            <li className="navItem">
              <button className="navLink" onClick={toggleContactDropdown}>Contact</button>
              {showContactDropdown && (
                <ul className="dropdownMenu">
                  <li><a href="mailto:abdossattar.kardii@gmail.com">Mail 1</a></li>
                  <li><a href="mailto:aissamassini2000@gmail.com">Mail 2</a></li>
                  <li><a href="tel:+212659212336">TEL 1</a></li>
                  <li><a href="tel:+212693255394">TEL 2</a></li>
                </ul>
              )}
            </li>
            {isLoggedIn ? (
              <button className="btn">
                <a href="/logout">Log Out</a>
              </button>
            ) : (
              <>
                <button className="btn">
                  <a href="/login">Login</a>
                </button>
                <button className="btn">
                  <a href="/register">Register</a>
                </button>
              </>
            )}
          </ul>
          <div className="closeNavbar" onClick={toggleNav}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div className="toggleNavbar" onClick={toggleNav}>
          <TbGridDots className="icon" />
        </div>
      </header>
      {isAboutOpen && <About onClose={closeAbout} />}
      {isNewsOpen && <News onClose={closeNews} />}
    </section>
  );
};

export default Navbar;
