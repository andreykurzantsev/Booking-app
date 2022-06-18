import React from 'react';
import "./propertyList.css";
import hotelImg from "../../static/prop-list/hotels.png";
import apartImg from "../../static/prop-list/apartments.png";
import resortImg from "../../static/prop-list/resorts.png";
import villaImg from "../../static/prop-list/villas.png";
import cabinImg from "../../static/prop-list/cabins.png";
import UseFetch from '../../hooks/useFetch.js';

const propertyList = () => {

  const {data, loading, error} = UseFetch("/hotels/countByType");
  const images = [
    hotelImg,
    apartImg,
    resortImg,
    villaImg,
    cabinImg,
  ]; 

  return (
    <div className="pList">
        {loading ? ("loading"): (
        <>{ data && images.map((img, i)=> (<div className="pListItem" key = {i}>
            <img src={img} alt="pict" className="pListImg" />
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
        </div>))}
        </>)}
    </div>
  )
}

export default propertyList