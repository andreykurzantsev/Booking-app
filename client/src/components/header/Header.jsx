import React from 'react';
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import "./header.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/searchContext.js';
import { AuthContext } from '../../context/authContext';
import { Link } from "react-router-dom";

const Header = ({ type }) => {

  const { user } = useContext(AuthContext);

  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      };
    });
  };

  const {dispatch} = useContext(SearchContext);

  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = () =>{
    dispatch({type:"NEW_SEARCH", payload:{destination, dates, options}});
    navigate("/hotels", {state:{destination, dates, options}})
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" &&
          <>
            <h1 className="headerTitle">Why wait? Find your next stay now!</h1>
            <p className="headerDescription">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Easybooking account.
            </p>
            {!user && <Link to="/login">
              <button className="headerBtn">Sign in / Register</button>
              </Link>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faHotel} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={e=>setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`
            ${format(dates[0].startDate, "MM/dd/yyyy")} 
            to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="date"
                  minDate = {new Date()}
                />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => { setOpenOptions(!openOptions) }}
                  className="headerSearchText">{`${options.adult} adult |
             ${options.children} children | ${options.room} room`}</span>
                {openOptions && <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button disabled={options.adult <= 1}
                        className="optionCounterBtn" onClick={
                          () => { handleOption("adult", "d") }
                        }>-</button>
                      <span className="optionCounterNumber">{options.adult}</span>
                      <button className="optionCounterBtn" onClick={
                        () => { handleOption("adult", "i") }
                      }>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button disabled={options.children <= 0}
                        className="optionCounterBtn" onClick={
                          () => { handleOption("children", "d") }
                        }>-</button>
                      <span className="optionCounterNumber">{options.children}</span>
                      <button className="optionCounterBtn" onClick={
                        () => { handleOption("children", "i") }
                      }>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button disabled={options.room <= 1}
                        className="optionCounterBtn" onClick={
                          () => { handleOption("room", "d") }
                        }>-</button>
                      <span className="optionCounterNumber">{options.room}</span>
                      <button className="optionCounterBtn" onClick={(
                      ) => { handleOption("room", "i") }
                      }>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
              </div>
            </div></>}
      </div>
    </div>
  )
}

export default Header