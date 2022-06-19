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
import { useLocation } from 'react-router-dom';
import UseFetch from '../../hooks/useFetch';
import "./hotel.css";
import { useContext } from 'react';
import { SearchContext } from '../../context/searchContext';


const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const { data, loading, error, reFetch } = UseFetch(`/hotels/find/${id}`);
  const {dates, options} = useContext(SearchContext);


  const MILLISECONDS_PER_DAY = 1000 * 60 *60 * 24;
  const dayDifference = (date1, date2)=>{
    const timeDiff = Math.abs(Date.parse(date2) - Date.parse(date1));
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };
  console.log(dates[0].endDate);
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleMove = (direction) => {

    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ?
        data.photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === data.photos.length - 1 ?
        0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      {loading ? "Loading" : <><div className={open === false ? "" : "parentSlider"}>
        {open && (<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark}
            className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft}
            className="Arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={data?.photos[slideNumber]}
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
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDescription">
                  {data.description}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Couples in particular like the location -
                  they rated it 9.4 for a two-person trip.
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer type="list" />
        </div></>}
    </div>
  )
}

export default Hotel

