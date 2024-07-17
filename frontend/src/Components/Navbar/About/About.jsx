import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa'; 
import './About.css';

const About = ({ onClose }) => {
  const modalRef = useRef(null);

  // Close modal if click detected outside of it
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Attach event listener to close modal on outside click
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="aboutModal">
      <div ref={modalRef} className="aboutContent">
        <div className="description">
          <h2>About Us</h2>
          <p>Discover the magic of Morocco with us. From vibrant cities to breathtaking landscapes, we promise an unforgettable experience. At "TravelWithUs", we're dedicated to ensuring you enjoy the best service and create lasting memories. Let's embark on your Moroccan adventure together!</p>
          {/* Using the close icon */}
          <FaTimes className="closeIcon" onClick={onClose} />
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3386.3787221254247!2d-4.4289228!3d31.9234737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd984b7ce0dd1e8f%3A0xf681a579f26dee7c!2sFst!5e0!3m2!1sfr!2sma!4v1720034143104!5m2!1sfr!2sma"
            frameBorder="0"
            width="100%"
            height="360"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ borderRadius: '20px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
