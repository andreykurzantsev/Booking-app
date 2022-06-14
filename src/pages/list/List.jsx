import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { DateRange } from 'react-date-range';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import "./list.css";

const List = () => {
const location = useLocation();
const [destination, setDestination]= useState(location.state.destination);
const [date, setDate]= useState(location.state.date);
const [openDate, setOpenDate] = useState(false);
//const [options, setOptions]= useState(location.state.options);
  return (
    <div><Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`
            ${format(date[0].startDate, "MM/dd/yyyy")} 
            to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (<DateRange
            onChange={item=> setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
            />)}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List