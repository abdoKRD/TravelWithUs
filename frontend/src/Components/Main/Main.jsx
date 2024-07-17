import React, {useState, useEffect, useRef, Navi} from 'react'
import { useNavigate } from 'react-router-dom';
import './main.css'
import m1 from '../../Assets/kesh/m1.jpg'
import m2 from '../../Assets/kesh/m2.jpg'
import m3 from '../../Assets/kesh/m3.jpg'
import m4 from '../../Assets/kesh/m4.jpg'
import m5 from '../../Assets/kesh/m5.jpg'
import m6 from '../../Assets/kesh/m6.jpg'
import m7 from '../../Assets/kesh/m7.jpg'
import m8 from '../../Assets/kesh/m8.jpg'
import o1 from '../../Assets/ouerz/1.jpg'
import o2 from '../../Assets/ouerz/2.jpg'
import o3 from '../../Assets/ouerz/3.webp'
import o4 from '../../Assets/ouerz/4.jpg'
import o5 from '../../Assets/ouerz/5.jpg'
import me1 from '../../Assets/merzouga/1.jpg'
import me2 from '../../Assets/merzouga/2.jpg'
import me3 from '../../Assets/merzouga/3.avif'
import me4 from '../../Assets/merzouga/4.jpg'
import me5 from '../../Assets/merzouga/5.gif'
import c1 from '../../Assets/chefchaouen/1.jpg'
import c2 from '../../Assets/chefchaouen/2.jpg'
import c3 from '../../Assets/chefchaouen/3.jpg'
import c4 from '../../Assets/chefchaouen/4.jpg'
import c5 from '../../Assets/chefchaouen/5.webp'
import t1 from '../../Assets/tangier/1.webp'
import t2 from '../../Assets/tangier/2.jpg'
import t3 from '../../Assets/tangier/3.jpeg'
import t4 from '../../Assets/tangier/4.jpg'
import t5 from '../../Assets/tangier/5.jpg'
import f1 from '../../Assets/fes/1.jpg'
import f2 from '../../Assets/fes/2.jpg'
import f3 from '../../Assets/fes/3.jpg'
import f4 from '../../Assets/fes/4.jpg'
import f5 from '../../Assets/fes/5.jpg'
import r1 from '../../Assets/rabat/1.webp'
import r2 from '../../Assets/rabat/2.jpg'
import r3 from '../../Assets/rabat/3.jpg'
import r4 from '../../Assets/rabat/4.jpeg'
import r5 from '../../Assets/rabat/5.jpg'
import te1 from '../../Assets/tetouan/0.jpg'
import te2 from '../../Assets/tetouan/1.jpg'
import te3 from '../../Assets/tetouan/2.jpg'
import te4 from '../../Assets/tetouan/3.jpg'
import te5 from '../../Assets/tetouan/4.jpg'
import e1 from '../../Assets/Essaouira/0.webp'
import e2 from '../../Assets/Essaouira/1.webp'
import e3 from '../../Assets/Essaouira/2.webp'
import e4 from '../../Assets/Essaouira/3.webp'
import e5 from '../../Assets/Essaouira/4.webp'
import e6 from '../../Assets/Essaouira/5.webp'
import e7 from '../../Assets/Essaouira/6.webp'
import img from '../../Assets/Marrakech.jpeg'
import img2 from '../../Assets/Chefchaouen.jpeg'
import img3 from '../../Assets/Essaouira.jpg'
import img4 from '../../Assets/Tangier.jpg'
import img5 from '../../Assets/Tetouan.jpg'
import img6 from '../../Assets/Rabat.jpg'
import img7 from '../../Assets/Ouarzazate.jpeg'
import img8 from '../../Assets/Merzouga.jpg'
import img9 from '../../Assets/Fes.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Modal from './Modal'
import { useAuth } from '../../AuthContext';
const Data = [
  {
    id:1,
    imgSrc: img,
    images: [m1, m2, m3, m4, m5, m6, m7, m8], // Add additional images here
    destTitle: 'Marrakech',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$545',
    description: 'Welcome to Marrakesh! This former imperial city is a hub of history and culture. Explore the walled medina’s alleys, filled with bustling souks selling traditional treasures. Don’t miss the iconic Koutoubia Mosque’s Moorish minaret, a symbol of the city.'
  },

  {
    id:2,
    imgSrc: img2,
    images: [c1, c2, c3, c4, c5], // Add additional images here
    destTitle: 'Chefchaouen',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$432',
    description: 'Discover Chefchaouen, nestled in the Rif Mountains. Known for its blue-washed buildings, the city offers a serene atmosphere. Explore its cobbled lanes, lined with workshops and historic sites. Admire the octagonal minaret of the Great Mosque.'
  },

  {
    id:3,
    imgSrc: img3,
    images: [e1, e2, e3, e4, e5, e6, e7], // Add additional images here
    destTitle: 'Essaouira',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$390',
    description: 'Experience Essaouira, a charming port city on the Atlantic coast. Wander the medina’s seafront ramparts and admire the ocean views. The city’s crescent beach is a paradise for water sports enthusiasts. Feel the Alizée winds as you explore.'
  },

  {
    id:4,  
    imgSrc: img4,
    images: [t1, t2, t3, t4, t5], // Add additional images here
    destTitle: 'Tangier',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$420',
    description: 'Welcome to Tangier, Morocco’s historic port on the Strait of Gibraltar. Explore its hillside medina, home to the Dar el Makhzen palace museum. Visit the American Legation Museum to learn about early U.S.-Morocco relations. Experience the blend of African and European cultures.'
  },

  {
    id:5,
    imgSrc: img5,
    images: [te1, te2, te3, te4, te5], // Add additional images here
    destTitle: 'Tetouan',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$409',
    description: 'Tetouan, like Tangier, offers a peaceful atmosphere. Known as the daughter of "Granada", it features Hispano-Moorish influences. Its UNESCO-listed medina showcases its multicultural identity and takes visitors on a journey through time.'
  },

  {
    id:6,
    imgSrc: img6,
    images: [r1, r2, r3, r4, r5], // Add additional images here
    destTitle: 'Rabat',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$397',
    description: 'Explore Rabat, Morocco’s capital by the Bouregreg River. Wander through the Kasbah of the Udayas and its surrounding gardens. Marvel at the iconic Hassan Tower overlooking the Atlantic Ocean. Experience the city’s blend of Islamic and French-colonial heritage.'
  },

  {
    id:7,
    imgSrc: img7,
    images: [o1, o2, o3, o4, o5], // Add additional images here
    destTitle: 'Ouarzazate',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$350',
    description: 'Discover Ouarzazate, the gateway to the Sahara Desert. Explore the Taourirt Kasbah and its panoramic views. Visit the red-earth city of Aït Ben Haddou and the majestic Todra Gorge. Experience the magic of the Draa Valley’s palm groves.'
  },

  {
    id:8,
    imgSrc: img8,
    images: [me1, me2, me3, me4, me5], // Add additional images here
    destTitle: 'Merzouga',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$412',
    description: 'Welcome to Merzouga, your gateway to Erg Chebbi’s sand dunes. Explore the town’s desert landscapes and unique ecosystems. Visit Dayet Srji, a seasonal salt lake attracting migratory birds. Experience the serene beauty of the Sahara.'
  },

  {
    id:9,
    imgSrc: img9,
    images: [f1, f2, f3, f4, f5], // Add additional images <here></here>
    destTitle: 'Fes',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$460',
    description: 'Experience Fes, Morocco’s cultural capital. Dive into the Fes El Bali medina, known for its medieval architecture and vibrant souks. Explore religious schools like Bou Inania and Al Attarine. Immerse yourself in Morocco’s rich heritage and history.'
  },
]


const Main = React.forwardRef(({ handlePayment }, ref) =>  {
  const buttonRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const { isLoggedIn } = useAuth(); // Check if the user is logged in
  const navigate = useNavigate(); 

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleDetailsClick = (details) => {
    setSelectedDetails(details);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handlePayClick = (participants, address) => {
    if (isLoggedIn) {
      handlePayment(participants, address);
      console.log("Button 1 clicked");
    } else {
      navigate("/login"); // Redirect to the login page if not authenticated
    }
  };
  
  return (
    <section className="main container section" ref={ref}>

        <div className="secTitle">
         <h3 data-aos="fade-right" className="title">
            Most visited destinations  
         </h3>
        </div>

        <div className="secContent grid">
          {
            Data.map(({id,imgSrc,images, destTitle,location,grade,fees,description})=>{
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt="destTitle" />  
                  </div>          
                  
                  <div className="cardInfo">
                    <h4 className="destTitle">
                      {destTitle}
                    </h4>
                    
                    <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                    
                    <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex" onClick={() => handleDetailsClick({ destTitle, location, grade, fees, description, images })}>
                      DETAILS<HiOutlineClipboardCheck className='icon'/>
                    </button>
                    <button
                  className="pay-button"
                  onClick={() => { 
                    if (isLoggedIn) {
                      handlePayment(1, "0xECbe6A7D865F614F93Cc79f9195C86C9b9C6fc2B"); 
                      console.log("Button 1 clicked");
                    } else {
                      setTimeout(() => {
                        navigate('/login');
                      }, 1000);} // 1 second delay                    }
                  }}
                  ref={buttonRef}
                  style={{ display: 'none' }}
                >
                  pay
                </button>                  </div>
                </div>
              )
            })
          }
        </div>
        <Modal show={showModal} onClose={handleCloseModal} details={selectedDetails} buttonRef={buttonRef}/>
    </section>
  ) 
});
export default Main
