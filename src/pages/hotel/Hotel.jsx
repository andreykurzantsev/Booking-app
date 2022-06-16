import React from 'react';
import { useState } from 'react';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import AnHotelImg1 from "../../static/hotel-page-photos/AnHotel1.jpg";
import AnHotelImg2 from "../../static/hotel-page-photos/AnHotel2.jpg";
import AnHotelImg3 from "../../static/hotel-page-photos/AnHotel3.jpg";
import AnHotelImg4 from "../../static/hotel-page-photos/AnHotel4.jpg";
import AnHotelImg5 from "../../static/hotel-page-photos/AnHotel5.jpg";
import AnHotelImg6 from "../../static/hotel-page-photos/AnHotel6.jpg";
import "./hotel.css";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const photoGalery = [
    AnHotelImg2,
    AnHotelImg3,
    AnHotelImg1,
    AnHotelImg4,
    AnHotelImg5,
    AnHotelImg6,
  ];

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ?
        photoGalery.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photoGalery.length - 1 ?
        0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <div className={open === false ? "" : "parentSlider"}>
        {open && (<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark}
            className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft}
            className="Arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photoGalery[slideNumber]}
              className="sliderImg no_Selection" alt="photo" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight}
            className="Arrow" onClick={() => handleMove("r")} />
        </div>)}
      </div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hôtel des Alpes</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>12 Rue De La Poste, 74000 Annecy, France</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photoGalery.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
              </div>
            ))}
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of Annecy</h1>
                <p className="hotelDescription">
                  The Hôtel des Alpes offers 2-star accommodations a 10-minute
                  walk from Lake Annecy and 100 m away from the train station.
                  The old city, shops and restaurants are within walking distance.
                  All units in the hotel are equipped with a flat-screen TV with
                  satellite channels and a desk. The private bathrooms
                  come with a hairdryer and free toiletries. The hotel has no
                  elevator but hotel staff is happy to help guests with their
                  luggage if needed. A continental breakfast is available every
                  morning at Hôtel des Alpes. Guests can enjoy the onsite bar.
                  The nearest airport is Chambéry-Savoie Airport, 30 mi from
                  the property. Public parking is available nearby. It is free
                  from 19:00 to 08:00 and at extra charge during the rest of the
                  day. This is our guests' favorite part of Annecy, according to
                  independent reviews.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Couples in particular like the location -
                  they rated it 9.4 for a two-person trip.
                </span>
                <h2>
                  <b>$837</b>
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
        <MailList />
        <Footer type="list" />
      </div>
    </div>
  )
}

export default Hotel