import React from 'react'
import "./DropdownBox.css"
import checkIn from "../../assets/check-in.png"
import checkOut from "../../assets/check-out.png"

const DropdrownBox = () => {
    return (
        <div className='dropdown-container'>
            <select name="select a city" id="" className='city-select'>
                <option value="">select a city</option>
                <option value="">abuja</option>
                <option value="">bayelsa</option>
            </select>
            <div className="check-in">
                <span>check In</span>
                <img src={checkIn} alt="checkin" />
            </div>
            <div className="check-out">
                <span>check Out</span>
                <img src={checkOut} alt="checkout" />
            </div>
            <button>
                Check Availability
            </button>
        </div>
    )
}

export default DropdrownBox