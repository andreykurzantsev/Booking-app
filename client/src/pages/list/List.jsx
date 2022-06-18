import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import SearchItem from '../../components/searchItem/SearchItem';
import { DateRange } from 'react-date-range';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import UseFetch from '../../hooks/useFetch';
import "./list.css";


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error, reFetch} = UseFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);

  const handleClick = () =>{
    reFetch()
  }

  return (
    <div><Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`
            ${format(date[0].startDate, "MM/dd/yyyy")} 
            to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (<DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />)}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">Min Price <small>per night</small></span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="listOptionsInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Max Price <small>per night</small></span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="listOptionsInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input type="number" min={1} className="listOptionsInput" placeholder={options.adult} />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Children</span>
                  <input type="number" min={0} className="listOptionsInput" placeholder={options.children} />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input type="number" min={1} className="listOptionsInput" placeholder={options.room} />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "Loading" :<>
            {data.map(item=>(
              <SearchItem item = {item} key={item._id}/>
            ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List