import React from 'react'
import "./Facilities.css"
import kitchen from "../../assets/editor.png"
import gym from "../../assets/gym.png"
import wifi from "../../assets/gym.png"
import taxi from "../../assets/taxi.png"
import pool from "../../assets/pool.png"

const Facilities = () => {
    return (
        <div className='facilities-container'>
            <h2>Facilities</h2>
            <div className="icon-container">
                <div className="icon">
                    <img src={kitchen} alt="kitchen" />
                    <h4>kitchen</h4>
                </div>
                <div className="icon">
                    <img src={pool} alt="pool" />
                    <h4>pool</h4>
                </div>
                <div className="icon">
                    <img src={wifi} alt="wifi" />
                    <h4>wifi</h4>
                </div>
                <div className="icon">
                    <img src={gym} alt="gym" />
                    <h4>gym</h4>
                </div>
                <div className="icon">
                    <img src={taxi} alt="taxi" />
                    <h4>taxi</h4>
                </div>
            </div>
        </div>
    )
}

export default Facilities