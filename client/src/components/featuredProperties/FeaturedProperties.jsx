import React from 'react'
import "./featuredProperties.css";
import ContinentalImg from "../../static/hotels/continental.png";
import CitadinesImg from "../../static/hotels/LondonHotel.png";
import LutetiaImg from "../../static/hotels/ParisHotel.png";
import RoyaltonImg from "../../static/hotels/NYHotel.png";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src={ContinentalImg} alt="hotelpic" className="fpImg" />
                <span className="fpName">InterContinental</span>
                <span className="fpCity">Kyiv</span>
                <span className="fpPrice">Starting from 100$</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={CitadinesImg} alt="hotelpic" className="fpImg" />
                <span className="fpName">Citadines Trafalgar Square</span>
                <span className="fpCity">London</span>
                <span className="fpPrice">Starting from 150$</span>
                <div className="fpRating">
                    <button>8.3</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={LutetiaImg} alt="hotelpic" className="fpImg" />
                <span className="fpName">Hotel Lutetia</span>
                <span className="fpCity">Paris</span>
                <span className="fpPrice">Starting from 130$</span>
                <div className="fpRating">
                    <button>8.1</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={RoyaltonImg} alt="hotelpic" className="fpImg" />
                <span className="fpName">Royalton</span>
                <span className="fpCity">New York</span>
                <span className="fpPrice">Starting from 120$</span>
                <div className="fpRating">
                    <button>7.8</button>
                    <span>Good</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties