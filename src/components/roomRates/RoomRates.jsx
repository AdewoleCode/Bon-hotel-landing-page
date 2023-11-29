import React from 'react'
import "./RoomRates.css"
import room1 from "../../assets/room1.png"
import room2 from "../../assets/room2.png"
import room3 from "../../assets/room3.png"
import room4 from "../../assets/room4.png"

const RoomRates = () => {
    return (
        <div className='roomRates-container'>
            <h2>Room & Rates</h2>
            <div className="roomrates-item-box">
                <div className="room-box">
                    <img src={room1} alt="room" />
                    <div className="content">
                        <h3>Standard Twin Room</h3>
                        <button>check rates</button>
                    </div>
                </div>
                <div className="room-box">
                    <img src={room2} alt="room" />
                    <div className="content">
                        <h3>Standard Room</h3>
                        <button>check rates</button>
                    </div>
                </div>
                <div className="room-box">
                    <img src={room3} alt="room" />
                    <div className="content">
                        <h3>Standard View Room</h3>
                        <button>check rates</button>
                    </div>
                </div>
                <div className="room-box">
                    <img src={room4} alt="room" />
                    <div className="content">
                        <h3>Deluxe Room</h3>
                        <button>check rates</button>
                    </div>
                </div>
            </div>
            <div className="cta">
                <h4>Get a room already!</h4>
                <button>Book Now</button>
            </div>

        </div>
    )
}

export default RoomRates