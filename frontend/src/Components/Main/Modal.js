import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Modal.css';

const Modal = ({ show, onClose, details, handlePayment, buttonRef }) => {
  const [participants, setParticipants] = useState(1);

  const handleClick = () => {
    // Trigger click on button in Page 1
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  if (!show || !details) {
    return null;
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button type="button" className="slick-prev">Previous</button>,
    nextArrow: <button type="button" className="slick-next">Next</button>
  };

  // const handlePayClick = () => {
  //   const amount = details.fees.replace('$', ''); // Removing the $ sign from fees
  //   handlePayment(parseFloat(amount) * participants); // Calculating the total amount based on participants
  // };

  const handleRangeChange = (event) => {
    setParticipants(parseInt(event.target.value));
  };

  const totalPrice = (parseFloat(details.fees.replace('$', '')) * participants).toFixed(2);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-content">
          <h2>{details.destTitle}</h2>
          <Slider className='slide' {...sliderSettings}>
            {details.images.map((image, index) => (
              <div key={index}>
                <img className='slide-img' src={image} alt={`${details.destTitle} ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <p><strong>Location:</strong> {details.location}</p>
          <p><strong>Fees:</strong> {details.fees}</p>
          <p><strong>Description:</strong> 
            Embark on a week-long adventure where every detail is meticulously planned for your ultimate relaxation and enjoyment. From the moment you arrive, we'll handle all your accommodations, including a luxurious hotel stay, delectable local cuisine, and a curated itinerary of activities and must-see attractions. Immerse yourself in the rich culture and vibrant life of our locale as we share our insider knowledge and local experiences, ensuring you have the best and most authentic trip imaginable. Join us for an unforgettable journey where your only task is to create lasting memories.
          </p>
          <div className='payment-box'>
            <button onClick={handleClick} className="pay-button">Pay Now</button>
            <div className="range-container">
              <label htmlFor="participants-range"> &nbsp;&nbsp;Participants&nbsp;:&nbsp;</label>
              <span id="range-value">{participants}&nbsp;&nbsp;&nbsp;</span>
              <div className="rangeBar">
                <input 
                  id="participants-range" 
                  type="range" 
                  min="1" 
                  max="5" 
                  value={participants} 
                  step="1" 
                  onChange={handleRangeChange} 
                />
              </div>
            </div>
            <p className='total-price'>Total Price: ${totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
