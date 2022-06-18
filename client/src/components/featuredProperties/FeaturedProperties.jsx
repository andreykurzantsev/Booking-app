import React from 'react'
import "./featuredProperties.css";
import ContinentalImg from "../../static/hotels/continental.png";
import CitadinesImg from "../../static/hotels/LondonHotel.png";
import LutetiaImg from "../../static/hotels/ParisHotel.png";
import RoyaltonImg from "../../static/hotels/NYHotel.png";
import UseFetch from '../../hooks/useFetch';

const FeaturedProperties = () => {

    const {data, loading, error} = UseFetch("/hotels?featured=true&limit=4");

    return (
        <div className="fp">
            {loading ? "Loading" : <>
            {data.map(item=>(<div className="fpItem" key={item._id}>
                <img src={item.photos[0]} alt="hotelpic" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>{item.review}</span>
                </div>}
            </div>))}
            </>}
        </div>
    )
}

export default FeaturedProperties