import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importing close icon from react-icons
import './Packages.css';
import imgl from './couple.png'
import imgr from './family.png'
const Packages = ({ onClose }) => {
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
    <div className="packagesModal">
    <div ref={modalRef} className="packagesContent">
        <div className='title'><h2>Our Packages</h2></div>
        <div className="boxes">
        <div className="left-box">
            <div className='imgl-cont'>
                <img src={imgl} />
            </div>
            <h3>7.5% discount for couple</h3>
        </div>
        <div className="right-box">
            <div className='imgr-cont'>
                <img src={imgr} className='imgr'/>
            </div>
            <h3>10% discount for family</h3>
        </div>
        </div>
    </div>
</div>
  );
};

export default Packages;
