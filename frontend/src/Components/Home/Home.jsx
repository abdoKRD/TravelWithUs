import React, { useState, useEffect, forwardRef } from 'react';
import './home.css';
import video from '../../Assets/video-1.mp4';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [price, setPrice] = useState(500);
  const names = ["Marrakech", "Chefchaouen", "Essaouira", "Tangier", "Tetouan", "Rabat", "Ouarzazate", "Merzouga", "Fes"];

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (inputValue) {
      const filteredNames = names.filter(name =>
        name.toLowerCase().includes(inputValue.toLowerCase())
      ).slice(0, 9);
      setSuggestions(filteredNames);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (name) => {
    setInputValue(name);
    setShowSuggestions(false);
  };

  return (
    <section className="home" ref={ref}>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>Search your Holiday</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input
                type="text"
                placeholder='Enter name here...'
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setShowSuggestions(true)}
              />
              <GrLocation className="icon" />
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">{price}$</h3>
            </div>
            <div className="input flex">
              <input
                type="range"
                id="price"
                max="500"
                min="100"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className='icon' />
            <span>SEARCH</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <FaTripadvisor className='icon' />
          </div>

          <div className="leftIcons">
            <BsListTask className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Home;
