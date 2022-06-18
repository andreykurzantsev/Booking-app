import React from 'react'
import "./featured.css"
import LondonImg from "../../static/img-cities/London.png";
import KyivImg from "../../static/img-cities/Kyiv.png";
import AnnecyImg from "../../static/img-cities/Annecy.png";
import UseFetch from '../../hooks/useFetch.js';

const Featured = () => {

    const {data, loading, error}= UseFetch("/hotels/countByCity?cities=london,kyiv,annecy");

    return (
        <div className="featured">
           {loading ? ("Loading? please wait") : (<><div className="featuredItem">
                <img src={LondonImg} alt="London" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>{data[0]}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={KyivImg} alt="Kyiv" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Kyiv</h1>
                    <h2>{data[1]}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={AnnecyImg} alt="Annecy" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Annecy</h1>
                    <h2>{data[2]}</h2>
                </div>
            </div></>)}
        </div>
    )
}

export default Featured