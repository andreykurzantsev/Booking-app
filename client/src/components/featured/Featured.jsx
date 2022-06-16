import React from 'react'
import "./featured.css"
import LondonImg from "../../static/img-cities/London.png";
import KyivImg from "../../static/img-cities/Kyiv.png";
import AnnecyImg from "../../static/img-cities/Annecy.png";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={LondonImg} alt="London" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={KyivImg} alt="Kyiv" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Kyiv</h1>
                    <h2>properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={AnnecyImg} alt="Annecy" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Annecy</h1>
                    <h2>properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured