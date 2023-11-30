import React from 'react'
import "./Footer.css"
import FooterLogo from "../../assets/footer-logo.png"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="left">
        <img src={FooterLogo} alt="bon" />
        <div className="left-bottom">
          <p>Bon Hotels Head Office</p>
          <h4>09024173596</h4>
          <h4>info@bonhotels.ng</h4>
        </div>
      </div>
      <div className="middle">
        <ul>
          <li>Our Hotels</li>
          <li>Our Conferencing</li>
          <li>Our Company</li>
          <li>Our Design</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="right">
        <h3>Subscribe for offers</h3>
        <input type="text" placeholder='Email Address' />
        <button>Subscribe Now</button>
      </div>
    </div>
  )
}

export default Footer