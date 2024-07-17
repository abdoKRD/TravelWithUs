import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import './News.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../Assets/Fes.jpeg';
import img2 from '../../../Assets/Marrakech.jpeg';
import img3 from '../../../Assets/Rabat.jpg';

const News = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  return (
    <div className="newsModal">
      <div ref={modalRef} className="newsContent">
      <Slider className='slide' {...sliderSettings}>
            <div className="news-container">
                        <a
                href="https://fr.hespress.com/373844-maroc-lenvol-vers-les-cieux-de-lindustrie-aeronautique.html"
                className="news-link-container"
                title="Maroc : l’envol vers les cieux de l'industrie aéronautique"
                target='_blank'
                >
                <img
                    src="https://fr.hespress.com/wp-content/uploads/2022/01/aeronautique.jpg"
                    className="news-image"
                    alt="Maroc : l’envol vers les cieux de l'industrie aéronautique"
                    target='_blank'

                />
                <h3 className="news-heading">
                    Maroc : l’envol vers les cieux de l'industrie aéronautique
                </h3>
                </a>
        </div>
        <div className="news-container">
                        <a
                href="https://fr.hespress.com/376485-megaprojet-de-loncf-les-responsables-coreens-se-mobilisent-pour-hyundai-rotem.html"
                className="news-link-container"
                title="Mégaprojet de l'ONCF : les responsables coréens se mobilisent pour Hyundai Rotem"
                >
                <img
                    src="https://fr.hespress.com/wp-content/uploads/2024/07/HUNDAY_ROTEM.jpg" 
                    className="news-image"
                    alt="Mégaprojet de l'ONCF : les responsables coréens se mobilisent pour Hyundai Rotem"
                />
                <h3 className="news-heading">
                    Mégaprojet de l'ONCF : les responsables coréens se mobilisent pour Hyundai Rotem
                </h3>
                </a>
        </div><div className="news-container">
                        <a
                href="https://fr.hespress.com/376488-veolia-annonce-la-cession-de-lydec-a-la-srm-casablanca-settat.html"                className="news-link-container"
                title="Veolia annonce la cession de Lydec à la SRM Casablanca-Settat"
                >
                <img
                    src="https://fr.hespress.com/wp-content/uploads/2020/02/Lydec-e1582548898579.jpg"
                    className="news-image"
                    alt="Veolia annonce la cession de Lydec à la SRM Casablanca-Settat"
                />
                <h3 className="news-heading">
                    Veolia annonce la cession de Lydec à la SRM Casablanca-Settat
                </h3>
                </a>
        </div>
          </Slider>
      </div>
    </div>
  );
};

export default News;
