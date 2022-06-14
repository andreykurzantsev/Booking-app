import React from 'react';
import "./propertyList.css";
import hotelImg from "../../static/prop-list/hotels.jpg";
import apartImg from "../../static/prop-list/apartments.jpg";
import resortImg from "../../static/prop-list/resorts.jpg";
import villaImg from "../../static/prop-list/villas.jpg";
import cabinImg from "../../static/prop-list/cabins.jpg";

const propertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={hotelImg} alt="hotels" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={apartImg} alt="apartments" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={resortImg} alt="resorts" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>233 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={villaImg} alt="villas" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={cabinImg} alt="cabins" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList