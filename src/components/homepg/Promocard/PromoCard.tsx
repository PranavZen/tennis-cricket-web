import React from 'react'
import './PromoCard.css'

const PromoCard = () => {
  return (
  <div className="promo-card">
    <div className="promo-image">
      <img src="https://via.placeholder.com/300x200" alt="Tennis Cricket" />
      <div className="play-icon">
        <i className="fas fa-play"></i>
      </div>
    </div>
    <div className="promo-content">
      <h2>Join Tenniscricket Team</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
      <a href="#" className="promo-btn">Register Now</a>
    </div>
  </div>
  )
}

export default PromoCard